import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useTourState } from "../Context/GlobalContext";
import MapComponent from "../Components/MapComponent";
import Carrusel from "../Components/Carrusel";
import Calendar from "../Components/Calendar"; 
import "react-datepicker/dist/react-datepicker.css";

const Detail = () => {
  const [tour, setTour] = useState([]);
  const { state, dispatch } = useTourState();
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const totalPrice = peopleCount * parseFloat(tour.precio);
  const navigate = useNavigate();
  const params = useParams();
  const url = `http://localhost:8081/api/productos/${params.id}`;

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true";
    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
    }
  }, [dispatch]);

  useEffect(() => {
    axios.get(url).then((res) => setTour(res.data));
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
    if(state.userActive && selectedDate !== null){
      navigate("/reservations");
    }
  };

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
              <span>{tour.descripcion_larga}</span>
              <p>
                Desde:{" "}
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
              selectedDate={selectedDate} 
              handleDateChange={handleDateChange}
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
          <span className="price-total">Total: ${totalPrice.toFixed(2)}</span>
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
    </main>
  );
};

export default Detail;
