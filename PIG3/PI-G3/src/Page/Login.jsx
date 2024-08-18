import React, {  useState } from 'react'
import Form from "../Components/Form";
import { Link, useNavigate } from 'react-router-dom';
import { useTourState } from '../Context/GlobalContext';


const Login = () => {

  const [error,setError] = useState(null)
  const [data,setData] = useState({
    email:"",
    contraseña: ""
  })
  const {state,dispatch} = useTourState()
  const navigate = useNavigate() // hook para navegar a la ruta home
  

  const handleChange = (e) =>{ // maneja los cambios en los input
    setData({
      ...data,
      [e.target.name] :e.target.value
    },[])
  }
  
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const {email,contraseña} = data;
    const user = state.user.find(user => user.email === email)
    
    
    if(!user){
      setError("Email no registrado")
    } /* else if(user.contraseña !== contraseña){
      setError("Contraseña incorrecta")
    } */ else {
          dispatch({ type: "SET_USER_ACTIVE", payload: true });
          dispatch({ type: "SET_USER_NAME", payload: user.nombre }); // Almacenar nombre
          dispatch({ type: "SET_USER_SURNAME", payload: user.apellido }); // Almacenar apellido
          localStorage.setItem("userActive", true);
          localStorage.setItem("userName", user.nombre); // Guardar en localStorage
          localStorage.setItem("userSurname", user.apellido); // Guardar en localStorage
      navigate('/');
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