'use client'
import { Button } from "./Button"
import { RiArrowRightLine, RiAtLine, RiLock2Line, RiPhoneLine, RiUser6Line } from "@remixicon/react";


import { Input } from "./Input";
import Link from "next/link";
import { Checkbox } from "./Checkbox";
import { signinSchema, signupSchema } from "@/zodSchemas/authSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Notification } from "./Notification";
import { useRouter } from "next/navigation";
import { signin, signup } from "@/api/clientReq";


export const Auth = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formSignin, setFormSignin] = useState(true)
    
    const handleForm = () => {
      setFormSignin(!formSignin)
    }
    // Formulário
    const handleFormSubmitSignin = async (data) => {
      
      setLoading(true);
      setErrorMessage('');

      try {
        const response = await signin(data);
        
        if(response.success){
          window.location.href = '/dashboard'
          
          
        } 
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage(error.response?.data?.error?.message ?? "Erro na conexão com o servidor.")
      } finally {
        setLoading(false);
      }
    };
   
    const { control: controlSignin, handleSubmit: handleSubmitSignin} = useForm({
      resolver: zodResolver(signinSchema),
      defaultValues: {
        email: '',
        senha: '',
      },
    });
    

     // Formulário
     const handleFormSubmitSignup = async (data) => {
      
      setLoading(true);
      setErrorMessage('');
      try {
        
        const response = await signup(data);
        if(response.success){
          router.push('/dashboard')
        } 
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage(error.response?.data?.error?.message ?? "Erro na conexão com o servidor.")
      } finally {
        setLoading(false);
      }
    };
   
    const { control: controlSignup, handleSubmit: handleSubmitSignup } = useForm({
      resolver: zodResolver(signupSchema),
      defaultValues: {
        nome: '',
        email: '',
        senha: '',
        confirmacaoSenha:'',
        celular:'',
      },
    });
    return(
        <div className={`auth`}>
            <div className="trigger">
                <div onClick={handleForm} className={`trigger-btn signin ${formSignin&& "active"}`}><p>Entrar</p></div>
                <div onClick={handleForm} className={`trigger-btn signup ${!formSignin&& "active"}`}><p>Cadastrar</p></div>
            </div>
            {errorMessage&&
                <Notification className="notification-error">{errorMessage}</Notification>
            }
            
            <div className="card signin">
              {formSignin&&
                <form onSubmit={handleSubmitSignin(handleFormSubmitSignin)}>
                  <div className="content">
                      <Input
                      control={controlSignin}
                      name="email"
                      className='content-item-1 '
                      label='E-mail'
                      icon={RiAtLine} 
                      inputType="text" // text, password
                      placeholder='Digite seu email'
                      autoFocus
                      disabled={loading}
                      />
                      <Input
                      control={controlSignin}
                      name="senha"
                      className='content-item-2 '
                      label='Senha'
                      icon={RiLock2Line} 
                      inputType="password" // text, password 
                      placeholder='Digite sua senha'
                      disabled={loading}
                      />
                  </div>
                  <div className="actions">
                      <div className="actions-item-2">
                      <Button
                          className="btn-primary"
                          type="submit" // submit, reset, button
                          disabled={loading}
                      >{loading ? 'Carregando...' : 'Entrar'}</Button>
                      </div>
                  </div>
                </form>
              }
              {!formSignin &&
              <form onSubmit={handleSubmitSignup(handleFormSubmitSignup)}>
                <div className="content">
                  <Input
                    control={controlSignup}
                    disabled={loading}
                    className='content-item-1'
                    label='Nome'
                    icon={RiUser6Line}
                    inputType="text"
                    placeholder='Digite seu nome'
                    name="nome"
                    autoFocus={true}
                  />
                  <Input
                    control={controlSignup}
                    disabled={loading}
                    className='content-item-1'
                    label='E-mail'
                    icon={RiAtLine}
                    inputType="text"
                    placeholder='Digite seu email'
                    name="email"
                  />
                    <Input
                      control={controlSignup}
                      disabled={loading}
                      className='phone-input content-item-1'
                      label='Celular'
                      inputType='tel'
                      icon={RiPhoneLine}
                      placeholder="(DDD) 91234-4321"
                      name="celular"
                    />
                  <Input
                      control={controlSignup}
                      disabled={loading}
                      className='content-item-1'
                      label='Senha'
                      icon={RiLock2Line}
                      inputType="password"
                      placeholder='Digite aqui sua senha'
                      name="senha"
                    />
                    <Input
                      control={controlSignup}
                      disabled={loading}
                      className='content-item-1'
                      label='Confirme sua senha'
                      icon={RiLock2Line}
                      inputType="password"
                      placeholder='Digite aqui sua senha'
                      name="confirmacaoSenha"
                    />
                </div>
                <div className="actions">
                  <div className="actions-item-1">
                    <Button
                      disabled={loading}
                      className="btn-primary"
                      type="submit"
                    >{loading ? 'Carregando...' : 'Cadastrar'}
                    </Button>
                  </div>
                </div>
              </form>
              
              }
            </div>

           
            
        </div>
    )
}