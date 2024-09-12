import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useTourState } from "../Context/GlobalContext";
import MapComponent from "../Components/MapComponent";
import Carrusel from "../Components/Carrusel";
import Calendar from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

import Policies from "../Components/Policies";
import { format } from "date-fns";


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

  // useEffect para guardar la fecha que selecciona el usuario en el contexto global, para esto necesitamos cambiarle el formato ya que react no guarda obejtos en estado global no los renderiza
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'dd/MM/yyyy');
      dispatch({ type: "SET_DATE_RESERVED", payload: formattedDate });
    }
    const people = peopleCount
    if(peopleCount)
    dispatch({type: "SET_PEOPLE",payload: people})

    if(totalPrice)
    dispatch({type:"SET_PRICE_RESERVED",payload:totalPrice})

}, [dispatch, selectedDate]);



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
      navigate(`/reservation/${params.id}`);
      
    }
    
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
            <li className="list-item">
              <svg viewBox="0 0 24 24" width="30px" height="30px">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.01 5.995a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 
                  0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-4 .75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 
                  0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m16.25-1.25a1.25 1.25 0 1 0 0 2.5 
                  1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-2.193 4.42a4.1 4.1 0 
                  0 0-1.814-.39h-.021a4.1 4.1 0 0 0-2.789 1.049c.408.296.775.646 1.092 
                  1.042l.165.206v3.911l-9.21.024v-3.935l.165-.206a5.69 5.69 0 0 1 6.405-1.782 5.6 5.6 0 0 1 4.178-1.81 
                  5.6 5.6 0 0 1 4.206 1.809 5.69 5.69 0 0 1 6.401 1.783l.165.206v3.911l-9.21.024v-3.935l.165-.206a5.7 
                  5.7 0 0 1 1.094-1.044 4.1 4.1 0 0 0-.992-.658m-7.972 1.07A4.2 4.2 0 0 0 2.74 
                  16.11v1.892l6.21-.016V16.11a4.2 4.2 0 0 0-3.105-1.377m12.31 0a4.2 4.2 0 0 0-3.105 
                  1.376v1.892l6.21-.016V16.11a4.2 4.2 0 0 0-3.105-1.377"></path>
              </svg>
              <p>Edades: de 0 a 100. Máximo de 10 por grupo</p>
            </li>
            <li className="list-item">
              <svg viewBox="0 0 24 24" width="25px" height="25px" class="d Vb UmNoP">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.733 3.498A10 10 0 0 0 2 12c0 5.523 4.477 10 10 
                  10s10-4.477 10-10S17.523 2 12 2v1.5a8.5 8.5 0 1 1-5.267 1.828z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.343 4.45h-3.55v-1.5h5.05V8h-1.5zm5.011 
                  8.1V7.19h1.5v5.457c0 .312-.117.612-.327.842l-2.764 3.032-1.109-1.01z"></path>
                </svg>
              <p>Duración: 5 H 30 M</p>
            </li>
            <li className="list-item">
              <svg viewBox="0 0 24 24" width="35px" height="35px" class="d Vb UmNoP">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 
                  0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 
                  2.25 12m9-5.5h1.5v5.19l3.28 3.28-1.06 1.06-3.72-3.72z"></path>
              </svg>
              <p>Horario de inicio: consultar disponibilidad</p>
            </li>
            <li className="list-item"> 
              <svg viewBox="0 0 24 24" width="25px" height="25px" class="d Vb UmNoP">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.966 3.512v16.976h8.068V3.512zm-.5-1.5a1 1 0 0 
                  0-1 1v17.976a1 1 0 0 0 1 1h9.068a1 1 0 0 0 1-1V3.012a1 1 0 0 0-1-1z"></path>
                <path d="M11.986 3.832c-1.21 0-1.409-.53-1.358-.796h2.746c.041.265-.179.796-1.388.796"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.01 2.286h4.007l.098.635c.063.401-.09.861-.489 
                1.191-.386.318-.941.47-1.64.47-.697 0-1.254-.15-1.638-.478-.401-.342-.533-.814-.456-1.21z"></path>
              </svg>
              <p>Entrada: para dispositivos móviles</p>
            </li>
            <li className="list-item">
              <svg viewBox="0 0 24 24" width="30px" height="30px" class="d Vb UmNoP">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 9.82h4.178c-.069-1.591-.356-2.993-.766-4.017-.237-.593-.501-1.023-.756-1.293-.211-.223-.38-.3-.5-.32h-.133c-.12.02-.289.097-.5.32-.255.27-.519.7-.756 1.293-.41 
                  1.024-.697 2.426-.767 4.017m-.374-5.14q-.135.272-.252.566C8.194 6.472 7.88 8.07 7.81 9.82H5.055a6.39 6.39 
                  0 0 1 3.88-5.14m2.301-1.989a7.883 7.883 0 0 0-7.726 7.88 7.88 7.88 0 0 0 7.884 7.885c.584 0 .871-.014 
                  1.11-.074.124-.031.172-.049.213-.064.058-.02.099-.036.312-.073l-.26-1.477a4 4 0 0 
                  0-.628.159c-.031.007-.132.029-.743.029-.121 0-.313-.06-.566-.327-.255-.27-.519-.699-.756-1.292-.41-1.025-.697-2.426-.767-4.017h4.203a4.7 
                  4.7 0 0 1-.113.843 6 6 0 0 1-.112.413l-.012.04-.004.016c-.034.114-.089.298-.1.478l1.498.088v.006s.007-.035.044-.161l.012-.04c.038-.126.09-.298.136-.505.072-.313.134-.698.152-1.178h2.734a4.2 
                  4.2 0 0 1-.195.949c-.055.16-.11.28-.166.403l-.004.01-.01.02c-.046.101-.132.288-.161.486l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.216-.529.168-.49.31-1.168.31-2.186a7.88 
                  7.88 0 0 0-7.72-7.879 2 2 0 0 0-.325 0m2.626 1.99q.134.271.252.565c.49 1.226.805 2.824.875 4.574h2.75a6.38 
                  6.38 0 0 0-3.877-5.14M8.94 16.466a8 8 0 0 1-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.055a6.39 6.39 0 0 
                  0 3.885 5.147"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.489 12.343h-8.75v6.648h5.255l3.495 2.325zm-1.5 
                1.5v4.674l-1.542-1.026H13.24v-3.648z"></path>
              </svg>
              <p>Guía en vivo: portugués, inglés, español</p>
            </li>
          </ul>
        </div>

        <div className="map-container">
          <MapComponent ubicacion={tour.ubicacion} />
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
