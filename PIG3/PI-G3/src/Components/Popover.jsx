import React from 'react';
import { useNavigate } from 'react-router-dom';

/*
show: Determina si el popover debe mostrarse o no.
onClose: Se ejecuta cuando se hace clic fuera del popover, cerrándolo.
onLogout: Se ejecuta cuando el usuario hace clic en Cerrar Sesión */
const Popover = ({ show, onClose, onLogout, name, surname, email, isAdmin }) => {
  if (!show) return null;
  const navigate = useNavigate();
  const handleAdminToolsClick = () => {
    navigate('/userlist'); // Cambia esto por la ruta correcta
  };


  return (
    <div className="popover">
      <div className="popover-content">
      {isAdmin && (
          <button className="btn-admin" onClick={handleAdminToolsClick}>
            Herramientas de Administrador
          </button>
        )}
        <p>{name} {surname}</p>
        <p>{email}</p>
        <button onClick={onLogout}>Cerrar Sesión</button>
      </div>
      <div className="popover-overlay" onClick={onClose}></div>
    </div>
  );
};

export default Popover;