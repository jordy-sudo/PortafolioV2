import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaCertificate}from'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <h5 className='text-light"'>Enlaces de interes</h5>
        <a href="https://www.linkedin.com/in/jordy-quila-743671241/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jordy-sudo" target="_blank"><FaGithub/></a>
        <a href="https://drive.google.com/drive/folders/1zJ0nyfI5llQklJq9Ad5whxAkN_UArqPJ"><FaCertificate/></a>
    </div>
  )
}

export default HeaderSocials