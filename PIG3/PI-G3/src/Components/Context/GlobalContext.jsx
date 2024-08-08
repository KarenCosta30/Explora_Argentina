import React, { createContext, useReducer } from 'react'

const TourState = createContext();

const initialState = {
    tour:[]
}

const GlobalContext = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>GlobalContext</div>
  )
}

export default GlobalContext