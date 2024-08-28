import React from 'react'
import { useTourState } from '../Context/GlobalContext'
import CardTour from '../Components/CardTour';
import Button from '../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const {state,dispatch} = useTourState();
  return (
    <main className='main-favorites'>
        <div className="container-favorites">
          <h1 className='title-favorites'>Mis tours favoritos</h1>
          <div className="card-favorites">
            {state.favorites.map(fav =>(
            <CardTour item={fav} key={fav.id}>
              <Button className={"btn-fav"} onClick={()=>{
                
                dispatch({type:"DELETE_FAVORITES", payload:fav})
              }}><FontAwesomeIcon icon={faXmark} /></Button>
            </CardTour>
          ))}     
          </div>
             
        </div>
        
    </main>
  )
}

export default Favorites