import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './indexSessionStart.css'
import './indexCreateAccount.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from "./Context/GlobalContext.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
   <React.StrictMode>
    <GlobalContext>
        <App />
    </GlobalContext>
  </React.StrictMode>
  </BrowserRouter>
);
 

