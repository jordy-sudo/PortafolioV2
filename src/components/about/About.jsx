import React from 'react'
import'./About.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary}from'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Conocimientos</h5>
      <h2>Sobre MI</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div> 
        <div className="about__content">
        <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1+ Años trabajando</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>10+ Trabajos para empresas y estudiantes</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>10+ Proyectos Culminados</small>
            </article>
          </div>
          <p>Trabaje en varias empresas llegando a tener mas de 1 año de experiencia mostrando mis
             capacidades y aptitudes de la materia de Computación, usando conocimientos como desarrollador web 
             (backend, frontend) en varios lenguajes de programación. Me encantaria trabajar contigo</p>
            <a href="#contact" className='btn btn-primary'>Habla Conmmigo</a>
      </div>

      </div>
    </section>
  )
}

export default About