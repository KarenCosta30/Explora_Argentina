import React, { useState } from 'react';
import Modal from 'react-modal';

// Configura el elemento de la aplicación para el modal
Modal.setAppElement('#root');

const CaracteristicasModal = ({ isOpen, onClose, onSave }) => {
    const [edades, setEdades] = useState('');
    const [duracion, setDuracion] = useState('');
    const [horario, setHorario] = useState('');
    const [entrada, setEntrada] = useState('');
    const [guia, setGuia] = useState('');

    const ensurePeriod = (value) => value.trim().endsWith('.') ? `${value.trim()} ` : `${value.trim()}. `;

    const handleSave = () => {
        const caracteristicas = [
            edades && `Edades: ${ensurePeriod(edades)}`,
            duracion && `Duración: ${ensurePeriod(duracion)}`,
            horario && `Horario de inicio: ${ensurePeriod(horario)}`,
            entrada && `Entrada para dispositivos móviles: ${ensurePeriod(entrada)}`,
            guia && `Guía en vivo: ${ensurePeriod(guia)}`
        ]
        .filter(Boolean)
        .join('\n');

        if (typeof onSave === 'function') {
            onSave(caracteristicas);
        }

        if (typeof onClose === 'function') {
            onClose();  // Asegurarse de que se llame la función `onClose`
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}  // Esto permite cerrar con la tecla "Esc" o clic en el fondo
            contentLabel="Características del Producto Modal"
        >
            <div style={{ position: 'relative', padding: '20px' }}>
                <button
                    onClick={onClose}  // Este botón cierra el modal
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>
                <h2>Ingrese las Características del Producto</h2>
                <form>
                    <label>
                        Edades:
                        <input
                            type="text"
                            value={edades}
                            onChange={(e) => setEdades(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Duración:
                        <input
                            type="text"
                            value={duracion}
                            onChange={(e) => setDuracion(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Horario de inicio:
                        <input
                            type="text"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Entrada para dispositivos móviles:
                        <input
                            type="text"
                            value={entrada}
                            onChange={(e) => setEntrada(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Guía en vivo:
                        <input
                            type="text"
                            value={guia}
                            onChange={(e) => setGuia(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="button" onClick={handleSave}>Guardar</button>
                </form>
            </div>
        </Modal>
    );
};


export default CaracteristicasModal;
