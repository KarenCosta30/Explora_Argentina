import React from 'react'
import Form from "../Components/Form";


const SessionStart = () => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Crear lógica para manejar la búsqueda
      };
  
  
      return (
    <div className='container-session-start'>
        <h2>Mi cuenta</h2>
        <p>¿Ya tienes cuenta? Accede a tu panel de usuario </p>
        <Form // aca pasamos la primer props que esta en el componente form
          fields={[
            { type: "text", placeholder: "Usuario o email" },
            { type: "text", placeholder: "Contraseña" },
          ]}
          buttonText="Buscar" // esta es la segunda props que marca que dira el boton
          onSubmit={handleSearchSubmit} // tercera props
        />
        <p>He olvidado mi contraseña</p>
        <p>¿No tienes cuenta? Regístrate aquí</p>
    </div>
  )
}

export default SessionStart