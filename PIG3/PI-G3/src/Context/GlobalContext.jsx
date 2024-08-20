import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { reducer } from '../reducers/reducers';

const TourState = createContext();

const initialState = {
    tour: [],
    user: null,  // Cambiado para almacenar un solo objeto de usuario en lugar de un array
    userActive: false,
    userName: "",
    userSurname: "",
    userEmail: "",
    userAdministrator: false
}

const GlobalContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const tourUrl = `http://localhost:8081/api/productos/aleatorios?limit=8`;
    
    useEffect(() => {
      axios.get(tourUrl)
        .then((res) => dispatch({ type: "GET_PRODUCTOS", payload: res.data }))        
        .catch((err) => console.log(err))
    }, []);

    const loginUser = (email, password) => {
        return axios.post('http://localhost:8081/usuarios/login', { email, password: password })
            .then((res) => {
                dispatch({ type: "SET_USER", payload: res.data });
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    };

    return (
        <TourState.Provider value={{ state, dispatch, loginUser }}>
            {children}
        </TourState.Provider>
    )
}

export default GlobalContext;

export const useTourState = () => {
    return useContext(TourState);
}
