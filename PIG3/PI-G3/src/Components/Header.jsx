import React, { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom"
import { useTourState } from "../Context/GlobalContext";


const Header = () => {
  const { state, dispatch } = useTourState();
  
       // Recuperar el estado de userActive y usuario de localStorage
       useEffect(() => {
        const activeUser = localStorage.getItem("userActive") === "true";
        const userName = localStorage.getItem("userName");
        const userSurname = localStorage.getItem("userSurname");

        if (activeUser) {
            dispatch({ type: "SET_USER_ACTIVE", payload: true });
            dispatch({ type: "SET_USER_NAME", payload: userName });
            dispatch({ type: "SET_USER_SURNAME", payload: userSurname });
        }
    }, [dispatch]);

  return (
    <div className="container-header">
      <div className="container-logo">
        <Link to="/">
          <img className="img-logo" src="/public/img/logo.png" alt="logo" />
        </Link>
        <p>EXPLORA ARGENTINA</p>
      </div>

      <div className="container-button">
        {state.userActive ? (
            <div className="user-avatar">
                <p>{state.userName}</p>
                <p>{state.userSurname}</p>
            </div>
        ):(
          <>
          <Link to="/login"> 
          <Button className={"btn-header"}>INICIAR SESION</Button>
        </Link>
        <Link to={"/createaccount"}>
        <Button className={"btn-header"}>CREAR CUENTA</Button>
        </Link> 
          </>
        )}
        </div>
    </div>
    );
  };

export default Header;