import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom"
import { useTourState } from "../Context/GlobalContext";
import Popover from "./Popover";
import Avatar from "./Avatar"



const Header = () => {
  const { state, dispatch } = useTourState();
  const [showPopover, setShowPopover] = useState(false);
  
       // Recuperar el estado de userActive y usuario de localStorage
       useEffect(() => {
        const activeUser = localStorage.getItem("userActive") === "true"; //Verifica si hay un usuario activo almacenado en el localStorage
        const userName = localStorage.getItem("userName"); // establece el nombre en el localStorage
        const userSurname = localStorage.getItem("userSurname"); // establece el apellido en el localStorage
        const userEmail = localStorage.getItem("userEmail");
        const userAdministrator = localStorage.getItem("userAdministrator") === "true"
        
/*   Si hay un usuario activo, actualiza el estado global para reflejar que el usuario ha 
  iniciado sesión y establece el nombre y apellido del usuario en el estado global. */
        if (activeUser) { 
            dispatch({ type: "SET_USER_ACTIVE", payload: true });
            dispatch({ type: "SET_USER_NAME", payload: userName });
            dispatch({ type: "SET_USER_SURNAME", payload: userSurname });
            dispatch({ type: "SET_USER_EMAIL", payload: userEmail });
            dispatch({ type: "SET_USER_ADMINISTRATOR", payload: userAdministrator });
        }
    }, [dispatch]);

    const handleLogout = () => {
      localStorage.removeItem("userActive"); //elimina el usuario del localstorage
      localStorage.removeItem("userName");
      localStorage.removeItem("userSurname");
      localStorage.removeItem("userEmail")
      localStorage.removeItem("userAdministrator");
      dispatch({ type: "SET_USER_ACTIVE", payload: false });//modifica el userActive del contexto global a false
      dispatch({ type: "SET_USER_NAME", payload: "" }); // modifica el userName del contexto global a vacio
      dispatch({ type: "SET_USER_SURNAME", payload: "" });// modifica el userSurname del contexto global a vacio
      dispatch({ type: "SET_USER_EMAIL", payload:""})
      dispatch({ type: "SET_USER_ADMINISTRATOR", payload: false }); // Modifica el userAdministrator del contexto global a false
      setShowPopover(false);
    };

    /* Cambia el estado de showPopover de false a true y viceversa. 
    Se usa para mostrar u ocultar el popover cuando el usuario hace clic en su avatar. */
    const togglePopover = () => {
      setShowPopover(!showPopover);
    };

  return (
    <div className="container-header">
      <div className="container-logo">
        <Link to="/">
          <img className="img-logo" src="/public/img/logo.png" alt="logo" />
        </Link>
        <p>EXPLORA ARGENTINA</p>
      </div>
        <div>
             <Link to={"/favorites"}>
        <span className="nav-header"> FAVORITOS </span>
        </Link>
        </div>
     
        
      
      <div className="container-button">
        {state.userActive ? (
        <div className="user-avatar">
        <Button className={"btn-avatar"} onClick={togglePopover}>
        <Avatar/>
 
        </Button>
        <Popover
              name={state.userName}
              surname={state.userSurname}
              email={state.userEmail}
              show={showPopover}
              onClose={togglePopover}
              onLogout={handleLogout}
              isAdmin={state.userAdministrator}
            />
      </div>
        )
        
        
        :(
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