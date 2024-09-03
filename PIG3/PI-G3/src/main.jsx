import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/login.css';
import './style/indexCreateAccount.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from "./Context/GlobalContext.jsx";
import "./icons.js";
import './style/favorites.css';
import './style/Calendar.css';
import './style/productAdmin.css';

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


