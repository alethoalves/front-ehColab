import { RiEyeLine } from "@remixicon/react";
import { RiEyeOffLine } from "@remixicon/react";
import { useState } from "react";
import { useController } from "react-hook-form";


export function Input(props) {
    const [showPassword, setShowPassword] = useState(false);
    const Icon = props.icon;
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const { field, fieldState } = useController(props);

    const handleChange = (event) => {
        let inputValue = event.target.value;
        if (props.className.includes("phone-input")) {
            inputValue = inputValue.replace(/\D/g, '');
            if (inputValue.length <= 11) {
                inputValue = inputValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            }
        } else if (props.className.includes("cpf-input")) {
            inputValue = inputValue.replace(/\D/g, '');
            if (inputValue.length <= 11) {
                inputValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            }
        }
        field.onChange(inputValue);
    };

    return (
        <label className={`input-container`}>
            <div className="flex-space">
                <p>{props.label}</p>
                {fieldState.error?.message &&
                    <p className="error-msg">{fieldState.error.message}</p>
                }
            </div>

            {props.icon &&
                <Icon className="input-icon" />
            }
            {props.inputType === 'password' && (
                showPassword ?
                    <RiEyeLine className="input-icon-hiddenText" onClick={togglePasswordVisibility} />
                    :
                    <RiEyeOffLine className="input-icon-hiddenText" onClick={togglePasswordVisibility} />
            )}
            <input
                {...field}
                value={field.value}  // Garanta que sempre haja um valor
                className={`${props.className} ${props.icon ? 'input-with-icon-left' : 'input-without-icon-left'} ${fieldState.invalid && 'input-error'}`}
                type={props.inputType === 'password' && showPassword ? 'text' : (props.inputType === 'password' ? 'password' : props.inputType)}
                placeholder={props.placeholder}
                autoFocus={props.autoFocus}
                disabled={props.disabled}
                onChange={handleChange}
            />
        </label>
    );
}