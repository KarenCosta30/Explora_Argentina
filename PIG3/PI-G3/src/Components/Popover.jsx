import React from 'react';

/*
show: Determina si el popover debe mostrarse o no.
onClose: Se ejecuta cuando se hace clic fuera del popover, cerrándolo.
onLogout: Se ejecuta cuando el usuario hace clic en Cerrar Sesión */
const Popover = ({ show, onClose, onLogout, name, surname, email  }) => {
  if (!show) return null;

  return (
    <div className="popover">
      <div className="popover-content">
        <p>{name} {surname}</p>
        <p>{email}</p>
        <button onClick={onLogout}>Cerrar Sesión</button>
      </div>
      <div className="popover-overlay" onClick={onClose}></div>
    </div>
  );
};

export default Popover;