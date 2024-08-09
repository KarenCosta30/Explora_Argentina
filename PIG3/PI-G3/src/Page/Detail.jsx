import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Detail = () => {
  const [tour, setTour] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const params = useParams(); 
  const url = `http://localhost:8081/api/productos/${params.id}`
  useEffect(()=>{axios.get(url.then (res=>setTour(res.data)))}, [params.id])
  


  // useEffect(() => {
  //   if (!params) {
  //     setError("ID no encontrado.");
  //     setLoading(false);
  //     return;
  //   }

  //   const url = `http://localhost:8081/api/productos/${params.id}`;
  //   axios.get(url)
  //     .then((res) => {
  //       setTour(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError("No se pudo cargar la información del producto.");
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (loading) {
  //   return <p>Cargando...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (!tour) {
  //   return <p>No se encontró la información del producto.</p>;
  // }

  return (
    <main className="container-detail">
      <h4>{tour.name}</h4>
      <section className="section-one">
        <div className="img-detail">
          <div>
            <img className="img-big" src={tour.imagenUrl} alt="imagen del producto" />
          </div>
          <div className="container-img-small">
            <img
              className="img-small"
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg"
              alt="imagen del producto"
            />
            <img
              className="img-small"
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg"
              alt="imagen del producto"
            />
          </div>
        </div>
        <div className="info-booking">
          <div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
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
              placeholder="1"
            />
            <div className="info-card-booking">
              <span>{tour.descripcion}</span>
              <span>Recogida incluida</span>
              <span>1 adulto x ${tour.precio}</span>
              <span>Total: $ {tour.precio}</span>
              <span>El precio incluye impuestos y tarifas de reservación</span>
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
        </div>
        <div className="travel">
          <div className="intinerary">
            <h3>Itinerario</h3>
            <ul className="intinerary-list">
              <li>Comenzarás en Av. San Martín 775</li>
              <li>Southern Fuegian Railway <br /> Parada: 50 minutos - Entrada incluida</li>
              <li>Parque Nacional Tierra del Fuego <br /> Parada: 3 horas - Entrada no incluida</li>
              <li>Bahía Ensenada Zaratiegui <br /> Parada: 30 minutos - Entrada incluida</li>
              <li>Bahía Lapataia <br /> Parada: 30 minutos - Entrada incluida</li>
              <li>Green Lagoon Viewpoint <br /> Parada: 20 minutos</li>
              <li>Lago Roca <br /> Parada: 30 minutos - Entrada incluida</li>
              <li>Regresarás al punto de partida</li>
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
