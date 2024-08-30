import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/*
show: Determina si el popover debe mostrarse o no.
onClose: Se ejecuta cuando se hace clic fuera del popover, cerrándolo.
onLogout: Se ejecuta cuando el usuario hace clic en Cerrar Sesión
*/

const Popover = ({ show, onClose, onLogout, name, surname, email, isAdmin }) => {
  const [adminToolsOpen, setAdminToolsOpen] = useState(false);
  const navigate = useNavigate();

  if (!show) return null;

  const handleAdminToolsClick = () => {
    //navigate('/userlist'); // Ruta panel de administrador
    setAdminToolsOpen(!adminToolsOpen);
  };

  const handleNavigation = (path) => {
    setAdminToolsOpen(false);
    navigate(path);
  };

  return (
    <div className="popover">
      <div className="popover-content">
        {isAdmin && (     
          <div className="admin-tools"> {/* Se actualizo componente Popover para que, al hacer clic en el botón
                                  "Herramientas de Administrador", se despliegue un menú con varias opciones. */}
            <button className="btn-admin" onClick={handleAdminToolsClick}>
              Herramientas de Administrador
            </button>
          {adminToolsOpen && (
              <div className="admin-menu">
                <button onClick={() => handleNavigation('/userlist')}>Lista de Usuarios</button>
                <button onClick={() => handleNavigation('/register-product')}>Registrar Producto</button>
                {/* Agrega más opciones aquí */}
              </div>
            )}
          </div>
        )}
        <p>{name} {surname}</p>
        <p>{email}</p>
        <Link to={"/favorites"}>Mis favoritos</Link>
        <button onClick={onLogout}>Cerrar Sesión</button>
      </div>
      <div className="popover-overlay" onClick={onClose}></div>
    </div>
  );
};

export default Popover;
