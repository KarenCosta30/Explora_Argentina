import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const CardCategories = () => {
  return (
    <div className='container-card-categories'>
      <img className='img-card-categories' src="https://www.argentina4u.com/pub/media/wysiwyg/Argentina/maipu_wine.jpg" alt="bodega" />
    <div className='title-card-categories'>
        <p className='title'>Tours por Bodegas</p>
        <p className='subtitle-card-categories'> <FontAwesomeIcon icon={faLocationDot} /> Norte Argentino</p>
      </div>
    </div>

  )
}

export default CardCategories