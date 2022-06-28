import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi' 
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mi portafolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/jordy.quilachamin/"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com/JordyQu"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jordy Quilachamin. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer