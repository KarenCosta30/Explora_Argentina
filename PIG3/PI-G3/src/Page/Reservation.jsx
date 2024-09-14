import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/Button';
import { useTourState } from '../Context/GlobalContext';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Reservation = () => {
    const { state, dispatch } = useTourState();
    const [reserved,setReserved] = useState([])
    const [error, setError] = useState(null);
    const params = useParams()
    const urlTourReserved = `http://localhost:8081/api/productos/${params.id}`;
    const navigate = useNavigate();
  
    
    useEffect(()=>{
        axios(urlTourReserved)
        .then((res) => setReserved(res.data))
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
 
    console.log(state.userId);
      console.log(params.id);
      console.log(state.dataReserved);
      console.log(typeof state.dataReserved);
      
      
      
    const handleSubmit = async (e) =>{
      e.preventDefault();
  
      const dateReservation = new Date(state.dataReserved).toISOString().split('T')[0];  // Convierte a YYYY-MM-DD
        const tourId = params.id
        const usuarioId = state.userId
      try {
          await  axios.post('http://localhost:8081/reservar/registrar', {
          usuarioId,
          productoId:tourId,
          fechaReserva:dateReservation,
});
        navigate('/login'); // Redirige al login después de un registro exitoso
      } catch (err) {
        setError("Error al realizar la reserva, por favor prueba mas tarde");
        console.error(err);
      } 
      navigate(`/reservationConfirmed/${params.id}`)
    }
  
    return (
    <div className="container-reservation">
         
        <div className="info-tour-reserved">
        <h2>{reserved.nombre}</h2>
        <img className='img-tour-reserved' src={reserved.imagenUrl} alt="img-tour" />
        <p>{reserved.descripcion}</p>
        </div>
       
        <div className="card-booking-reservation">
          <h3>Reserva tu lugar</h3>
          <div className="info-card-booking">
            <p>Nombre: {state.userName} {state.userSurname}</p>
            <p>Email: {state.userEmail}</p>
            <p>Fecha: {state.dataReserved}  </p>
            <p>Personas: {state.people}</p>
        </div>
        <p className='price-reserved'>Total: USD {state.priceReserved}</p>
        <Button onClick={handleSubmit} className={"btn-booking"}>Confirmar Reserva</Button>
        {error && <p className="error-message">{error}</p>}
        </div>
        <div className='container-btn-back'></div>
        <Button onClick={()=>navigate(-1)} className="btn-back-reserved">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
    </div>
  )
}

export default Reservation