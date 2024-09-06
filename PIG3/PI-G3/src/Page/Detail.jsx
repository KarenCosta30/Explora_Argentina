import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useTourState } from "../Context/GlobalContext";
import MapComponent from "../Components/MapComponent";
import Carrusel from "../Components/Carrusel";
import Calendar from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Policies from "../Components/Policies";


const Detail = () => {
  const [tour, setTour] = useState([]);
  const { state, dispatch } = useTourState();
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservedDates, setReservedDates] = useState([]); // Estado para las fechas reservadas
  const totalPrice = peopleCount * parseFloat(tour.precio);
  const navigate = useNavigate();
  const params = useParams();
  const url = `http://localhost:8081/api/productos/${params.id}`;
  const reservedDatesUrl = `http://localhost:8081/reservar/producto/${params.id}`; // URL para obtener las fechas reservadas

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true";
    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
    }
  }, [dispatch]);

  useEffect(() => {
    axios.get(url).then((res) => setTour(res.data));
  }, [params.id]);

  useEffect(() => {
    axios.get(reservedDatesUrl).then((res) => {
      // Convertir las fechas reservadas a objetos Date y sumar un día
      const dates = res.data.map(reservation => {
        const date = new Date(reservation.fechaReserva);
        // Sumar un día
        date.setDate(date.getDate() + 1);
        return date;
      });
      setReservedDates(dates);
    });
  }, [params.id]);

  const handlePeopleChange = (event) => {
    setPeopleCount(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClick = () => {
    if (!state.userActive) {
      navigate("/login");
    } else if (selectedDate === null) {
      alert("Selecciona una fecha para reservar");
    } else {
      alert("Reserva realizada con éxito");
      // Aquí puedes agregar la lógica para completar la reserva.
    }
   /*  if(state.userActive && selectedDate !== null){
      navigate("/reservations");
    } */
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <main className="container-detail">
      <h4>{tour.nombre}</h4>
      <section className="section-one">
        <div className="carrusel">
          <div className="img-detail">
            <Carrusel
              images={[tour.imagenUrl, tour.imagenUrl2, tour.imagenUrl3]}
            />
          </div>
          <div className="info-booking">
            <div>
              <span>{tour.descripcionLarga}</span>
              <p>
                Desde: USD {" "}
                <span className="price-info-booking">{tour.precio}</span> por
                adulto
              </p>
            </div>
          </div>
        </div>

        <div className="card-booking">
          <h3>Reserva tu lugar</h3>
          <div className="info-card-booking">
            <Calendar
              selected={selectedDate} 
              onChange={handleDateChange}
              placeholderText="Selecciona una fecha"
              excludeDates={reservedDates} // Excluir las fechas reservadas
              /* minDate={new Date()} */ // Opcional: Evita seleccionar fechas pasadas
              minDate={tomorrow}
            />
            <div className="people-selection">
              <label htmlFor="people-count">Personas:</label>
              <select
                id="people-count"
                value={peopleCount}
                onChange={handlePeopleChange}
              >
                {[...Array(10).keys()].map((number) => (
                  <option key={number + 1} value={number + 1}>
                    {number + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <span className="price-total">Total: USD {totalPrice.toFixed(2)}</span>
          <Button 
            className="btn-booking" 
            onClick={handleClick}
            disabled={!state.userActive || selectedDate === null}
          >
            {state.userActive ? "Reservar" : "Iniciar sesión para reservar"}
          </Button>
          <span className="tax">
            El precio incluye impuestos y tarifas de reservación.
          </span>
        </div>
      </section>

      <section className="section-two">
        <div className="travel">
          <div className="itinerary">
            <h3>Itinerario</h3>
            <ul className="itinerary-list">
              <p>{tour.itinerario}</p>
            </ul>
          </div>
        </div>
        <div className="property bordealamitad">
          <ul className="property-list">
            <li>
              <p>Edades: de 0 a 100. Máximo de 24 por grupo</p>
            </li>
            <li>
              <p>Duración: 5 H 30 M</p>
            </li>
            <li>
              <p>Horario de inicio: consultar disponibilidad</p>
            </li>
            <li>
              <p>Entrada: para dispositivos móviles</p>
            </li>
            <li>
              <p>Guía en vivo: portugués, inglés, español</p>
            </li>
          </ul>
        </div>

        <div className="map-container">
          <MapComponent />
        </div>
      </section>
       <div className="btn-detail">
        <Button onClick={()=>navigate(-1)} className="btn-back">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        
      </div> 
      <Policies/>
    </main>
  );
};

export default Detail;
