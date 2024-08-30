import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTourState } from '../Context/GlobalContext';
import '../style/adminTools.css';

const ControlPanel = () => {
  const { state, dispatch } = useTourState(); // Acceder al estado global
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.userActive || !state.userAdministrator) {
      navigate('/login');
    }
  }, [state.userActive, state.userAdministrator, navigate]);

  useEffect(() => {
    axios.get('http://localhost:8081/usuarios/listar')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleRoleToggle = (id, esAdministrador) => {
    axios.put(`http://localhost:8081/usuarios/cambiar-rol/${id}`, null, {
      params: { esAdministrador }
    })
    .then(response => {
      setUsuarios(prevState => 
        prevState.map(user => 
          user.id === id ? { ...user, esAdministrador } : user
        )
      );

      // Verifica si el usuario actual se quita su propio rol de administrador
      if (state.user.id === id && !esAdministrador) {
        // Actualizar el estado global y localStorage
        dispatch({ type: "SET_USER_ADMINISTRATOR", payload: false });
      }
    })
    .catch(error => {
      console.error("Error updating admin status:", error);
    });
  };

  // useEffect para sincronizar el localStorage con el estado global
  useEffect(() => {
    localStorage.setItem("userAdministrator", state.userAdministrator);
    if (!state.userAdministrator) {
      navigate('/'); // Redirigir fuera del panel de administración
    }
  }, [state.userAdministrator, navigate]);

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='panel-container'>
      <input className='search-email'
        type="text" 
        placeholder="🔍 Buscar por email" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <h1>Control Panel</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>
                <button 
                  className={usuario.esAdministrador ? 'btn-remove-admin' : 'btn-add-admin'}
                  onClick={() => handleRoleToggle(usuario.id, !usuario.esAdministrador)}
                >
                  {usuario.esAdministrador ? "Quitar Admin" : "Hacer Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlPanel;