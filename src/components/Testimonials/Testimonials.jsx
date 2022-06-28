import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR4,
    name:'Naydie Beatriz',
    review:'Trabaje con Jordy durante un proyecto que debia presentarlo para mi universidad el cual constaba de una interfaz grafica echa con bootstrap y su bakcend con PHP el cual fue totalmente un gran trabajo'
  },
  {
    avatar:AVTR2,
    name:'Andres Simbaña',
    review:'Necesitaba una aplicacion movil que me de acceso a varios lugares de internet solo ocn un boton el cual lo culmino con gran exelencia esta aplicacion estaba dirigida a una persona de la tercera edad que se complica el uso del celular'
  },
  {
    avatar:AVTR3,
    name:'Alexander Padilla',
    review:'Trabajo con Jordy para darme clases de programacion es una persona con un lexico muy fluido y grandes conocimientos, terminando trabajos en tiempos establecidos y dando un plus que el crea necesario para que el proycto se presente mejor'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Comentarios Clientes</h5>
      <h2>Testimonio</h2>
      <Swiper className="container testimonials__container"
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}    
      >
        {data.map(({avatar,name,review},index)=>{
          return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials