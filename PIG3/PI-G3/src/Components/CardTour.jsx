import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CardTour = () => {
  return (
    
      <div className='card-tour'>
        <img className='img-card-tour' src="https://www.clarin.com/2022/03/01/2oF9F-Mnr_2000x1500__1.jpg" alt="img-jujuy" />
        <p className='title-card-tour'>Bodega Catena Zapata + Almuerzo</p>
        <p className='subtitle-card-tour'>Almuerzo Maridado en Bodega El Enemigo, transporte incluido</p>
        <div className="price-card-tour">
          <p>Desde:<span className='price'> $345.573</span></p>
          <Link to={'/detail'} className="link-card-tour">
            <Button className="btn-card-tour">Detalles</Button>
          </Link>
        </div>
      </div>
   
  );
}

export default CardTour;
