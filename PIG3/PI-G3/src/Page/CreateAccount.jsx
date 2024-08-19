import React, { useState } from 'react';
import Form from "../Components/Form";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPassword: ""
  });

  const navigate = useNavigate(); // Hook de react-router para redirigir

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellido, email, password, confirmarPassword } = formData;

    if (!nombre || !/^[a-zA-Z]+$/.test(nombre) || nombre.length <= 3) {
      setError("Nombre incorrecto");
      return;
    }

    if (!apellido || !/^[a-zA-Z]+$/.test(apellido) || apellido.length <= 3) {
      setError("Apellido incorrecto");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Debe ingresar un correo electrónico válido.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  if (!passwordRegex.test(password) || /\s/.test(password)) {
      setError("Error en la contraseña");
      return;
    }

    if (password !== confirmarPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError(null);

    try {
      await axios.post('http://localhost:8081/usuarios/registrar', {
        nombre,
        apellido,
        email,
        password,
        esAdministrador: false
      });
      navigate('/login'); // Redirige al login después de un registro exitoso
    } catch (err) {
      setError("Error al registrar el usuario. Inténtalo de nuevo.");
      console.error(err);
    }
  };

  return (
    <main className='main'>
      <div className='container-form-create'>
        <p className='title-form-create'>Registrate</p>
        <p className='subtitle-form-create'>Es rápido y fácil</p>
        <div className="check">
          <input type="checkbox" />
          <label>Quiero ser usuario administrador</label>
        </div>
        <Form className={"form-create-accout"}
          fields={[
            { type: "text", placeholder: "Nombre", name: "nombre", value: formData.nombre, onChange: handleChange },
            { type: "text", placeholder: "Apellido", name: "apellido", value: formData.apellido, onChange: handleChange },
            { type: "email", placeholder: "Correo electrónico", name: "email", value: formData.email, onChange: handleChange },
            { type: "password", placeholder: "Password", name: "password", value: formData.password, onChange: handleChange },
            { type: "password", placeholder: "Confirma tu password", name: "confirmarPassword", value: formData.confirmarPassword, onChange: handleChange },
          ]}
          buttonText="Crear Cuenta"
          onSubmit={handleSubmit}
          inputClassName="create-account-input"
        />
        <p className='p-end'>¿Ya tienes una cuenta? <Link to={"/login"}><span className='span'> Iniciar Sesión</span></Link></p>
        {error && <p className="error-message">{error}</p>}
      </div>
    </main>
  );
};

export default CreateAccount;
/*
import React, { useState } from 'react';
import Form from "../Components/Form";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPassword: ""
  });

  const navigate = useNavigate(); // Hook de react-router para redirigir

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellido, email, password, confirmarPassword } = formData;

    if (!nombre || !/^[a-zA-Z]+$/.test(nombre) || nombre.length <= 1) {
      setError("Nombre incorrecto");
      return;
    }

    if (!apellido || !/^[a-zA-Z]+$/.test(apellido) || apellido.length <= 1) {
      setError("Apellido incorrecto");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Debe ingresar un correo electrónico válido.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (!passwordRegex.test(password) || /\s/.test(password)) {
      setError("Error en la contraseña");
      return;
    }

    if (password !== confirmarPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError(null);

    try {
      await axios.post('http://localhost:8081/usuarios/registrar', {
        nombre,
        apellido,
        email,
        password,
        esAdministrador: false
      });
      navigate('/login'); // Redirige al login después de un registro exitoso
    } catch (err) {
      setError("Error al registrar el usuario. Inténtalo de nuevo.");
      console.error(err);
    }
  };

  return (
    <main className='main'>
      <div className='container-form-create'>
        <p className='title-form-create'>Regístrate</p>
        <p className='subtitle-form-create'>Es rápido y fácil</p>
        <Form 
          className={"form-create-accout"} // Asegúrate de que esta clase exista en tu CSS
          inputClassName="create-account-input" // Asegúrate de que esta clase exista en tu CSS
          fields={[
            { type: "text", placeholder: "Nombre", name: "nombre", value: formData.nombre, onChange: handleChange },
            { type: "text", placeholder: "Apellido", name: "apellido", value: formData.apellido, onChange: handleChange },
            { type: "email", placeholder: "Correo electrónico", name: "email", value: formData.email, onChange: handleChange },
            { type: "password", placeholder: "Contraseña", name: "password", value: formData.password, onChange: handleChange },
            { type: "password", placeholder: "Confirma tu Contraseña", name: "confirmarPassword", value: formData.confirmarPassword, onChange: handleChange }
          ]}
          buttonText="Crear Cuenta"
          onSubmit={handleSubmit}
        />
        <p className='p-end'>¿Ya tienes una cuenta? <Link to={"/login"}><span className='span'> Iniciar Sesión</span></Link></p>
        {error && <p className="error-message">{error}</p>}
      </div>
    </main>
  );
};

export default CreateAccount;
*/