
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const CardCategories = ({item}) => {
  const {imagen,nombre} = item;
  

  return (
    <div className='container-card-categories'>
      <img className='img-card-categories' src={imagen} alt="bodega" />
    <div className='title-card-categories'>
        <p className='title'>{nombre}</p>
        <p className='subtitle-card-categories'> <FontAwesomeIcon icon={faLocationDot} /> Norte Argentino</p>
      </div>
    </div>

  )
}

export default CardCategories