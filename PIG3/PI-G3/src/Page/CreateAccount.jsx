import React from 'react'
import Form from "../Components/Form";

const CreateAccount = () => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Crear lógica para manejar la búsqueda
      };
  return (
    <div className='container-create-account'>
        <h2>Crea una cuenta</h2>
        <Form // aca pasamos la primer props que esta en el componente form
          fields={[
            { type: "text", placeholder: "Nombre" },
            { type: "text", placeholder: "Apellido" },
            { type: "email", placeholder: "Correo electrónico" },
            { type: "text", placeholder: "Contraseña" },
            { type: "text", placeholder: "Confirma tu contraseña" },
            { type: "email", placeholder: "Correo electrónico" },
          ]}
          buttonText="Crear Cuenta" // esta es la segunda props que marca que dira el boton
          onSubmit={handleSearchSubmit} // tercera props
        />
    </div>
  )
}

export default CreateAccount