import React, {  createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { reducer } from '../reducers/reducers';

const TourState = createContext();

const initialState = {
    tour:[],
    user:[],
    userActive:false,
    userName:"",
    userSurname:""
}

const GlobalContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const tourUrl = `http://localhost:8081/api/productos/aleatorios?limit=8`;
    const usersUrl = `http://localhost:8081/usuarios/listar`;
    console.log(tourUrl);
    console.log(usersUrl)
    
    useEffect(() => {
      axios.get(tourUrl)
      .then((res)=>  dispatch({type: "GET_PRODUCTOS", payload: res.data}))        
      .catch((err)=> console.log(err))
    }, []) 

    useEffect(()=>{
      axios(usersUrl)
      .then((res)=> dispatch({type: "SET_USERS",payload:res.data}))
      .catch((err) => console.log(err));
    },[])

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