import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css"; // Asegúrate de tener tu CSS personalizado

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Función para agregar una clase a los días anteriores a hoy
  const dayClassName = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ajusta a medianoche para comparación exacta
    if (date < today) {
      return "disabled-date"; // Clase para las fechas no disponibles
    }
    return null;
  };

  return (
    <div>
      <h3>Selecciona la fecha:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dayClassName={dayClassName} // Añadir la clase a los días
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // Deshabilitar fechas anteriores a hoy
        placeholderText="Selecciona una fecha"
        showTimeSelect={false} // Eliminar la selección de hora
      />
    </div>
  );
};

<<<<<<< HEAD
export default CalendarComponent;
=======
export default CalendarComponent;
>>>>>>> 4f5e2c1eb2e97264a4df075016f5ed62dd8cdd75
