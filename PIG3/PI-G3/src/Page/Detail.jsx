import React from "react";
import Button from "../Components/Button" 
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <main className="container-detail">
      {/* ESTA SECTION ES VA DESDES EL TITULO HASTA EL PRECIO */}
      <h4>Parque Nacional y Viaje en Tren Fin del Mundo Tour Guiado</h4>
      <section className="section-one">
        
        <div className="img-detail">
          <div>
            <img className="img-big" src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg" alt="tren" /> {/* ESTA IMG SE TRA DE LA API */}
          </div>
          <div className="container-img-small">
            <img className="img-small" src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg" alt="tren" />{/* ESTA IMG SE TRA DE LA API */}
            <img className="img-small" src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg" alt="tren" />{/* ESTA IMG SE TRA DE LA API */}
          </div>
        </div>
        <div className="info-booking">
          <div>
            <span> {/* ESTE PARRAFO SE TRAE DE LA API */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </span>
          <Button className={"btn-text"}>LEER MENOS</Button>
          <p>Desde:$ <span className="prince-info-booking">115.191</span> por adulto</p> {/* EL PRECIO SE TRAE DESDE LA API */}
          </div>
          
          <div className="card-booking">
            <span>Reserva tu lugar</span>
              <input type="text" placeholder="Sabado,17 de Agosto" /> {/* la info del placeholder viene de la api */}
              <input type="text" placeholder="2" /> {/* la info del placeholder viene de la api */}
                <div className="info-card-booking">
                <span>Tour Guiado a Parque Nacional y Viaje en tren Fin del Mundo</span> {/* ESTO SE TRAE DE LA API */}
                <span>pRecogida incluida</span>{/* ESTO SE TRAE DE LA API */}
                <span>2 adultos x $115.191</span>{/* ESTO SE TRAE DE LA API */}
                <span>Total: $ 230.382</span>{/* ESTO SE TRAE DE LA API */}
                <span>El precio incluye impuestos y tarifas de reservación</span>
                </div>
              <Button className={"btn-card-booking"}>RESERVA TU LUGAR</Button>
              </div>
        </div>
      </section>

{/* COMIENZA SECTION 2 */}

      <section className="section-two">
      <div className="property bordealamitad">
             <ul className="property-list">
              <li><p>Edades: de 0 a 100. Máximo de 24 por grupo</p></li>
              <li><p>Duracion: 5 H 30 M</p></li> {/* ESTO SE TRAE DE LA API */}
              <li><p>Horario de inicio: consultar disponibilidad</p></li>
              <li><p>Entrada: para dispositivos móviles</p></li>
              <li><p>Guía en vivo: portugues, inglés, español</p></li>
             </ul>
            </div>
          {/* A PARTIR DE ACA COMIENZA INTINERARIO */}
          <div className="travel">
              <div className="intinerary">
                <h3>Intinerario</h3>
                <ul className="intinerary-list">
                  <li>Comenzarás en Av. San Martín 775</li>{/* ESTO SE TRAE DE LA API */}
                  <li>Southern Fuegian Railway <br />
                  Parada: 50 minutos - Entrada incluida</li>{/* ESTO SE TRAE DE LA API */}
                  <li>Parque Nacional Tierra del Fuego <br />
                  Parada: 3 horas - Entrada no incluida</li>{/* ESTO SE TRAE DE LA API */}
                  <li>Bahía Ensenada Zaratiegui <br />
                  Parada: 30 minutos - Entrada incluida</li>{/* ESTO SE TRAE DE LA API */}
                  <li> Bahia Lapataia <br />
                  Parada: 30 minutos - Entrada incluida</li>{/* ESTO SE TRAE DE LA API */}
                  <li> Green Lagoon Viewpoint <br />
                  Parada: 20 minutos</li>
                  <li>Lago Roca <br />
                  Parada: 30 minutos - Entrada incluida</li>{/* ESTO SE TRAE DE LA API */}
                  <li>Regresarás al punto de partida</li>        
                </ul>
              </div>
              <div className="map">
              <img src="/img/Screenshot 2024-08-04 002056.png" alt="mapa" />{/* ESTO SE TRAE DE LA API */}
                </div>
           </div>
    </section>
      <div className="btn-detail">
        <Link to={"/"}>
       <Button className="btn-back"> "flecha"</Button>
       </Link> 
      </div>
       
    </main>
  );
};

export default Detail;
