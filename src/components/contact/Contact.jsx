import React from 'react'
import './Contac.css'
import {MdOutlineEmail} from'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react' 
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const notify = () => toast("Gracias por contactarte,Pronto me contactare contigo :)",{
    autoClose:1500
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qx2wxgd', 'template_qikpgj4', form.current, '-NUPsOTW9DC7kJDki')
      .then((result) => {
        e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Contacto con un boton</h5>
      <h2>Contactate conmmigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Correo Electronico</h4>
              <h5>quilajordy@gmail.com</h5>
              <a href="mailto:quilajordy@gmail.com" target="_blank">Envia un mensaje</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Jordy Quila</h5>
              <a href="https://m.me/jordy.quilachamin"  target="_blank">Envia un mensaje</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>(+593)984581915</h5>
              <a href="https://api.whatsapp.com/send?phone=5930984581915&text=Gracias%20por%20contactarme,%20muy%20pronto%20te%20estar%C3%A9%20contactando"  target="_blank">Envia un mensaje</a>
            </article>
        </div>
        {/*Termino de contacto y sus opciones*/}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Ingresa tu nombre' required />
          <input type="text" name='email' placeholder='Ingresa tu Email' required/>
          <textarea name="message" rows="10" placeholder='Ingresa tu mensaje' required></textarea>
          <button onClick={notify} type='submit' className='btn btn-primary'>Enviar Mensaje</button>
          <ToastContainer />

        </form>

      </div>

    </section>
  )
}

export default Contact