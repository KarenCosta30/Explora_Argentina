import React, { useEffect, useState } from 'react'
import { useTourState } from '../Context/GlobalContext';
import Button from '../Components/Button';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ReservationConfirmed = () => {
  const { state, dispatch } = useTourState();
  const [reservationConfirm,setReservationConfirm] = useState(null)
  const params = useParams()
  const urlReservation = `http://localhost:8081/reservar/${params.id}`;
  console.log(urlReservation);
  console.log(reservationConfirm);
  
  useEffect(()=>{
    axios(urlReservation).then((res) => setReservationConfirm(res.data))
  },[params.id])
  useEffect(()=>{
    const userId = localStorage.getItem("userId")
     const userName = localStorage.getItem("userName");
     const userSurname = localStorage.getItem("userSurname");
     const userEmail = localStorage.getItem("userEmail");

     dispatch({ type: "SET_USER_NAME", payload: userName });
     dispatch({ type: "SET_USER_SURNAME", payload: userSurname });
     dispatch({ type: "SET_USER_EMAIL", payload: userEmail });
     dispatch({ type: "SET_USER_ID",payload:userId})
 },[dispatch])
  
 return (
    <div className="container-reservation">
         <div className="card-booking-reservation-confirm">
          <img className='logo-reservation-confirm' src="/public/img/logo.png" alt="logo" />
          <h3>YA TENES RESERVADO TU TOUR !!!</h3>
          <p>Estas listo/a ?</p>
          <div className="info-card-booking-confirm">
            <p>DATOS DE LA RESERVA</p>
            <p>N° de Reserva: <span>{state.reservationId}</span> </p>
            <p>Nombre: <span>{state.userName} {state.userSurname}</span></p>
            <p>Email: <span>{state.userEmail}</span></p>
            <p>Fecha: <span>{state.dataReserved}</span>  </p>
            <p>Personas: <span>{state.people}</span></p>
            <p className='price-reserved'>Total: USD {state.priceReserved}</p>
        </div>
        <p>Por favor, presenta este comprobante al momento de realizar el tour. Es fundamental para garantizar el acceso a la actividad.</p>
        </div>
        <div className='container-btn-back'></div>
        <Button onClick={()=>navigate(-1)} className="btn-back-reserved-confirm">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
    </div>
  )
}
