import React from 'react';
import '../style/footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-footer-box">
        <div className='foot-box'>
          <p>Sobre Nosotros</p>
          <p className='footer-about'>Explora Argentina te lleva a descubrir los mejores destinos del país con experiencias únicas.</p>
          <p className='footer-about'>Copyright © Explora Argentina 2024 All rights reserved</p>
          <Link to={"/"}>
        <img className='logo-footer' src="/img/logo.png" alt="logo" />
        </Link>
        </div>

        <div className='foot-box'>
          <p>Acceso rápido</p>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/paquetes">Paquetes</Link></li>
            <li><Link to="/por-que-nosotros">Por qué nosotros</Link></li>

          </ul>
        </div>

        <div className='foot-box'>
          <p>Destinos Populares</p>
          <ul>
            <li><Link to="/bariloche">Bodega Trapiche</Link></li>
            <li><Link to="/santiago-del-estero">San Carlos de Bariloche</Link></li>
            <li><Link to="/tierra-del-fuego">Excursión a Cataratas de Iguazú</Link></li>
            <li><Link to="/messi">Paseo a Caballo por Viñedos</Link></li>
            <li><Link to="/novedades">Teleferico Cerro Otto</Link></li>

          </ul>
        </div>

        <div className='foot-box'>
          <p>Contacto</p>
          <ul>
          <div className='iconos'>
            <li><FontAwesomeIcon icon={faFacebook} style={{color: "grey"}} /></li>
            <li><FontAwesomeIcon icon={faInstagram} style={{color: "grey"}}/></li>
            <li><FontAwesomeIcon icon={faXTwitter} style={{color: "grey"}}/></li>
          </div>
          <li>+111 222 333</li>
          <li>info@exploraargentina.com</li>
          <li>1245, Bs. As. Argentina</li>
          </ul>
          <div className='clearfix'></div>
        </div>
      </div>

      <div className='new_footer_area bg_color'>
        <div className='new_footer_top'>
          <div className='footer_bg'>
            <div className='footer_bg_one'></div>
            <div className='footer_bg_two'></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;