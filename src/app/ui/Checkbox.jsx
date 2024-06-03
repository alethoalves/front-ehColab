import { useController } from "react-hook-form";

export function Checkbox(props) {
    const {field, fieldState} = useController(props)
    
    return (
        <label className="checkbox-container">
            <input
            type="checkbox"
            disabled={props.disabled}
            {...field}
            checked={field.value} 
            />
            <p className="p5 ml-1">{props.label}</p>
        </label>
    )
  }

