import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portfolio1.jpg' 
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//Creo un array para recorrer y poder abrir mis trabajos
const data=[
  {
    id:1,
    image:IMG1,
    title:'Blog-usando Laravel',
    github:'https://github.com/jordy-sudo/BLOG-Laravel',
    demo:'https://www.canva.com/design/DAFEX9ORaVQ/NG6335wOp84O3hg_EW2GcQ/view?utm_content=DAFEX9ORaVQ&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent'
  },
  {
    id:2,
    image:IMG2,
    title:'BenchMarking',
    github:'https://github.com/jordy-sudo/comparacion-de-algoritmos',
    demo:'https://jordy-aprendizaje.herokuapp.com/'
  },
  {
    id:3,
    image:IMG3,
    title:'Pagina web con Angular',
    github:'https://github.com/jordy-sudo/Pagina-web-Angular-Backend',
    demo:'https://www.canva.com/design/DAFE1MWOEa0/EdKRUoYaxGGzF_xHuKBoRQ/view?utm_content=DAFE1MWOEa0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent'
  }

]







const portafolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo mas reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>  
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default portafolio