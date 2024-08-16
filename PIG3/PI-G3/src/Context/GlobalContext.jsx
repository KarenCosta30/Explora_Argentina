import React, {  createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { reducer } from '../reducers/reducers';

const TourState = createContext();

const initialState = {
    tour:[]
}

const GlobalContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const url = `http://localhost:8081/api/productos/aleatorios?limit=8`;
    console.log(url);
    
    useEffect(() => {
      axios.get(url)
      .then((res)=>  dispatch({type: "GET_PRODUCTOS", payload: res.data}))        
      .catch((err)=> console.log(err))
    }, []) 

  return (
    <TourState.Provider value={{state,dispatch}}>
        {children}
    </TourState.Provider>
  )
}

export default GlobalContext

export const useTourState = () =>{
  return useContext(TourState)
}