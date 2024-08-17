import React, { useState } from 'react'
import Form from "../Components/Form";
import { Link } from 'react-router-dom';


const Login = () => {

  const [error,setError] = useState(null)
  const [data,setData] = useState({
    email:"",
    contraseña: ""
  })
  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name] :e.target.value
    })
  }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const {email,contraseña} = data;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
          setData("Email incorrecto")
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
        if (!passwordRegex.test(contraseña) || /\s/.test(contraseña)) {
        setError("Contraseña inválida");
        return;
    }
      };
  
  
      return (
    <main className='main-login'>
      <div className='container-form-login'>
        <p className='title-login'>Iniciar Sesión</p>
        <p className='subtitle-login'>Llegó el momento de explorar !</p>
        <Form className={"form-login"}
        // aca pasamos la primer props que esta en el componente form
          fields={[
            { type: "text", placeholder: "Email",name:"email", value: data.email,onChange:handleChange },
            { type: "password", placeholder: "Contraseña", name:"contraseña", value: data.contraseña,onChange:handleChange  },
          ]}
          buttonText="Ingresar" // esta es la segunda props que marca que dira el boton
          onSubmit={handleSearchSubmit} // tercera props
          inputClassName={"input-login"}
          
        />
      {error && <p className="error-message"> {error}</p>}
        <p>He olvidado mi contraseña</p>
        <p>¿No tienes cuenta? <Link to={"/createaccount"}><span className='span'>Regístrate aquí</span></Link></p>

      </div>

       
    </main>
  )
}

export default Login