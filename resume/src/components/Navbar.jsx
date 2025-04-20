import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
 <nav className='flex items-center justify-between py-8'>
    <div className="flex flex-shrink-0 items-center"></div>

    <div className="m-3 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/shrinivas-mandhare-905160335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target='blank'
    rel='noopener noreferrer'
    aria-label='LinkedIn'>
        <FaLinkedin />
    </a>

    <a href="https://github.com/shree8599"
    target='blank'
    rel='noopener noreferrer'
    aria-label='GitHub'>
        <FaGithub />
    </a>

    <a href="https://www.instagram.com/s.h.r.e.e_2004?igsh=MXNiOHhiZ3JnOTZtZA=="
    target='blank'
    rel='noopener noreferrer'
    aria-label='Instagram'>
        <FaInstagram />
    </a>

  


    </div>


 </nav>
  )
}

export default Navbar