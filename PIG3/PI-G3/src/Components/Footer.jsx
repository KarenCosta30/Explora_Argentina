
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='copyright'>
        <p>Copyright © Explora Argentina 2024 All rights reserved</p>
        <Link to={"/"}>
        <img className='logo-footer' src="/img/logo.png" alt="" />
        </Link>
        
      </div>
      <div className='footer-columns'>
        <ul className='ul-footer'>
          <li className='info'>Menu</li>
          <li>Home</li>
          <li>Experiencias</li>
        </ul>
        <ul className='ul-footer'>
          <li className='info'>Informacion</li>
          <li>Destino</li>
          <li>Soporte</li>
          <li>Terminos y condiciones</li>
          <li>Privacidad</li>
        </ul>
        <ul className='ul-footer'>
          <li className='info'>Info de contacto</li>
          <li>+111 222 333</li>
          <li>info@exploraargentina.com</li>
          <li>1245, Bs. As. Argentina</li>
        </ul>

        <ul className='ul-footer'>
          <li className='info'>Seguinos en</li>
          <div className='iconos'>
            <li><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}} /></li>
            <li><FontAwesomeIcon icon={faInstagram} style={{color: "#fafcff"}}/></li>
            <li><FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff"}}/></li>
          </div>
        </ul>




      </div>



    </div >
  )
}

export default Footer