// Popover.js
import React from 'react';


const Popover = ({ show, onClose, user }) => {
  if (!show) return null;

  return (
    <div className="popover">
      <div className="popover-content">
        <div className="popover-header">
          <span>{user.nombre} {user.apellido}</span>
          <button className="close-button" onClick={onClose}>✖</button>
        </div>
        <div className="popover-body">
          <p>Email: {user.email}</p>
          <button onClick={user.onLogout}>Cerrar Sesión</button>
        </div>
      </div>
      <div className="popover-overlay" onClick={onClose}></div>
    </div>
  );
};

export default Popover;

