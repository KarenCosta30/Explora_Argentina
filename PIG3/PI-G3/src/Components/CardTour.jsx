import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CardTour = ({item}) => {
  const {imagenUrl,nombre,descripcion,precio} = item
  return (
    
      <div className='card-tour'>
        <img className='img-card-tour' src={imagenUrl} alt="img-jujuy" /> {/* traer img */}
        <p className='title-card-tour'>{nombre}</p> {/* TRAER DE ENDPOINT */}
        <p className='subtitle-card-tour'>{descripcion}</p>{/* TRAER DE ENDPOINT */}
        <div className="price-card-tour">
          <p>Desde:<span className='price'> ${precio}</span></p>{/* TRAER DE ENDPOINT */}
          <Link to={'/detail'} className="link-card-tour">
            <Button className="btn-card-tour">Detalles</Button>
          </Link>
        </div>
      </div>
   
  );
}

export default CardTour;
