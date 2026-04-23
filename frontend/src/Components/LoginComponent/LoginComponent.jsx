import React from 'react'
import './LoginComponent.css'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'
import customFetch from '../../Utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login/", data);
    return redirect("/");
  } catch (error) {
    return error;
  }
};


const LoginComponent = () => {
const navigation = useNavigation()
  return (
    <div className="login-component-container">
        <Form method='post'>
            <div className="login-component-head">
                <h1>Inicio de Sesion</h1>
            </div>
            <hr />
            <div className="login-component-body">
                <div className="login-component-input">
                    <h4>Nombre de usuario</h4>
                    <input name='username' type="text" />
                </div>
                <div className="login-component-input">
                    <h4>Contraseña</h4>
                    <input name='password' type="password" />
                </div>
            </div>
            <button type='submit' className='big-button'>Iniciar Sesion</button>
        </Form>
    </div>
  )
}

export default LoginComponent