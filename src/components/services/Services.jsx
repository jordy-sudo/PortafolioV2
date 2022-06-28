import React from 'react'
import './Servics.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>Mis Aptitudes </h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Aplicaciones amigables para cada usuario en específico</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Restructuración si es necesario para la satisfacción del usuario</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fácil comprensión del entorno visual de cada aplicación</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Re contratación para proyectos futuros de parte de varios usuarios</p>
            </li>
          </ul>
        </article>
        {/*Termino de primer cuadro */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creación de páginas web ajustándose a las exigencias requeridas</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Varios lenguajes de programación para cada la comodidad del usuario</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de base de datos SQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de bases de datos no SQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mantenimiento de sitios web desplegados en la web</p>
            </li>
          </ul>
        </article>
        {/*Termino de segundo cuadro */}
        <article className='service'>
          <div className="service__head">
            <h3>Contenido de creación</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ideas para optimizar una tarea del usuario</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementación de estilos y animaciones para página web</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive para accesibilidad de todos los usuarios</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Estrategias para el enfoque de una aplicación(a quien va dirigida)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Inventarios de contenidos</p>
            </li>
          </ul>
        </article>
        {/*Termino de tercer cuadro */}
      </div>
    </section>
  )
}

export default services