import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Detail = () => {
  const [tour, setTour] = useState([]);

  const params = useParams(); 
  const url = `http://localhost:8081/api/productos/${params.id}`
  useEffect(()=>{
    axios.get(url)
    .then (res=>setTour(res.data))
  }, [params.id])
  
  return (
    <main className="container-detail">
      <h4>{tour.nombre}</h4>
      <section className="section-one">
        <div className="img-detail">
          <div>
            <img className="img-big" src={tour.imagenUrl} alt="imagen del producto" />
          </div>
          <div className="container-img-small">
            <img
              className="img-small"
              src={tour.imagenUrl2}
              alt="imagen del producto"
            />
            <img
              className="img-small"
              src={tour.imagenUrl3}
              alt="imagen del producto"
            />
          </div>
        </div>
        <div className="info-booking">
          <div>
            <span>
              {tour.descripcion_larga}
            </span>
            <Button className={"btn-text"}>LEER MENOS</Button>
            <p>
              Desde: <span className="prince-info-booking">{tour.precio}</span> por adulto
            </p>
          </div>

          <div className="card-booking">
            <span>Reserva tu lugar</span>
            <input
              type="text"
              placeholder="Sabado,17 de Agosto"
            />
            <input
              type="text"
              placeholder="1 persona"
            />
            <div className="info-card-booking">
              
              <span className="description-card-booking">{tour.descripcion}.</span>
              <div className="description-card-booking-two">
                <span> Recogida incluida</span>
              <span> 1 adulto x ${tour.precio}</span>
              <span> Total: $ {tour.precio}</span>
              <span> El precio incluye impuestos y tarifas de reservación</span>
              </div>
              
            </div>
            <Button className={"btn-card-booking"}>RESERVA TU LUGAR</Button>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="property bordealamitad">
          <ul className="property-list"> 
            <li><p>Edades: de 0 a 100. Máximo de 24 por grupo</p></li>
            <li><p>Duración: 5 H 30 M</p></li>
            <li><p>Horario de inicio: consultar disponibilidad</p></li>
            <li><p>Entrada: para dispositivos móviles</p></li>
            <li><p>Guía en vivo: portugués, inglés, español</p></li>
          </ul> 
          {/* <p>{tour.detalle_itinerario}</p> */}
        </div>
        <div className="travel">
          <div className="intinerary">
            <h3>Itinerario</h3>
            <ul className="intinerary-list">
                <p>{tour.itinerario}</p>
            </ul>
          </div>
          <div className="map">
            <img src="/img/Screenshot 2024-08-04 002056.png" alt="mapa" />
          </div>
        </div>
      </section>
      <div className="btn-detail">
        <Link to={"/"}>
          <Button className="btn-back"> <FontAwesomeIcon icon={faArrowLeft} /></Button>
        </Link>
      </div>
    </main>
  );
};

export default Detail;
