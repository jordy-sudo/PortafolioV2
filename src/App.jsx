import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experencie'
import Portafolio from './components/portafolio/Portafolio'
import Services from './components/services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


 const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portafolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App