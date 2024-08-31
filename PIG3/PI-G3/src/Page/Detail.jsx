import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useTourState } from "../Context/GlobalContext";
import MapComponent from "../Components/MapComponent";
import Carrusel from "../Components/Carrusel";
import Calendar from "../Components/Calendar";

const Detail = () => {
  const [tour, setTour] = useState([]);
  const { state, dispatch } = useTourState();
  const [peopleCount, setPeopleCount] = useState(1); //-- Estado para la cantidad de personas
  const totalPrice = peopleCount * parseFloat(tour.precio); //-- Calculo del precio total segun la cantidad de personas seleccionadas

  //--Funcion para cambiar la cantidad de personas
  const handlePeopleChange = (event) => {
    setPeopleCount(event.target.value);
  };

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true"; //Verifica si hay un usuario activo almacenado en el localStorage
    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
    }
  }, [dispatch]);

  const params = useParams();
  const url = `http://localhost:8081/api/productos/${params.id}`;
  useEffect(() => {
    axios.get(url).then((res) => setTour(res.data));
  }, [params.id]);

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
                <span className="prince-info-booking">{tour.precio}</span> por
                adulto
              </p>
            </div>
          </div>
        </div>

        <div className="card-booking">
          <h3>Reserva tu lugar</h3>
          <div className="info-card-booking">
            <Calendar />
            {/* Se agrega un select para seleccionar la cantidad de personas */}
            <div className="people-selection">
              <label htmlFor="people-count">Personas:</label>
              <select
                id="people-count"
                value={peopleCount} 
                // Se asigna el valor del estado peopleCount al select
                onChange={handlePeopleChange}
              >
               //-- Se crea un select con opciones del 1 al 10 para seleccionar la cantidad de personas.
                {[...Array(10).keys()].map((number) => (
                  <option key={number + 1} value={number + 1}>
                    {number + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Se muestra el precio total segun la cantidad de personas seleccionadas. */}
          <span className="price-total">Total: ${totalPrice.toFixed(2)}</span>
          <Button className="btn-booking">Reservar</Button>
          <span className="tax"> El precio incluye impuestos y tarifas de reservación.</span>
            
               
        </div>
      </section>

      <section className="section-two">
        <div className="travel">
          <div className="intinerary">
            <h3>Itinerario</h3>
            <ul className="intinerary-list">
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
            {/* {tour.detalle_itinerario} */}
          </ul>
        </div>

        {/* <div className="map">
            <img src="/img/Screenshot 2024-08-04 002056.png" alt="mapa" />
          </div> */}
        <div className="map-container">
          <MapComponent />
        </div>
      </section>
      <div className="btn-detail">
        <Link to={"/"}>
          <Button className="btn-back">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Detail;
