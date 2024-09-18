import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { useTourState } from "../Context/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Popover from "./Popover";
import Avatar from "./Avatar";

const Header = () => {
  const { state, dispatch } = useTourState();
  const [showPopover, setShowPopover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa
  const location = useLocation(); // Para obtener la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true";
    const userName = localStorage.getItem("userName");
    const userSurname = localStorage.getItem("userSurname");
    const userEmail = localStorage.getItem("userEmail");
    const userAdministrator = localStorage.getItem("userAdministrator") === "true";

    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
      dispatch({ type: "SET_USER_NAME", payload: userName });
      dispatch({ type: "SET_USER_SURNAME", payload: userSurname });
      dispatch({ type: "SET_USER_EMAIL", payload: userEmail });
      dispatch({ type: "SET_USER_ADMINISTRATOR", payload: userAdministrator });
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("userActive");
    localStorage.removeItem("userName");
    localStorage.removeItem("userSurname");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userAdministrator");
    dispatch({ type: "SET_USER_ACTIVE", payload: false });
    dispatch({ type: "SET_USER_NAME", payload: "" });
    dispatch({ type: "SET_USER_SURNAME", payload: "" });
    dispatch({ type: "SET_USER_EMAIL", payload: "" });
    dispatch({ type: "SET_USER_ADMINISTRATOR", payload: false });
    setShowPopover(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  const handleSearchClick = () => {
    dispatch({ type: "TOGGLE_SEARCH_FORM", payload: !state.showSearchForm });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className={`container-header ${scrolled ? "scrolled" : ""}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="hamburger-icon"
        />
      </div>
      <div className="container-logo">
        <Link to="/" onClick={handleLogoClick}>
          <img className="img-logo" src="/public/img/logo.png" alt="logo" />
        </Link>
        <p className="logo-name">EXPLORA ARGENTINA</p>
      </div>

      <div className={`menu ${menuOpen ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" onClick={() => { handleLogoClick(); closeMenu(); }}>
          <span className="navbar">Inicio</span>
        </Link>
        <span className="navbar" onClick={() => { handleSearchClick(); closeMenu(); }}>Buscar</span>
        <span className="navbar" onClick={closeMenu}>Contacto</span>
      </div>

      <div className="container-button">
        {state.userActive ? (
          <div className="user-avatar">
            <Button className={"btn-avatar"} onClick={togglePopover}>
              <Avatar />
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
        ) : (
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
