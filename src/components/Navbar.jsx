import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import resume from "../assets/Ab.pdf";

function Navbar() {
  return (
   <nav className='mb-7 border border-b-blue-950 flex items-center justify-between  '>
    <div className='  flex p-3 flex-shrink-0 items-center'>
         <img className='mx-3 w-10' src={logo} alt="logo" />
    </div>
    <div className='  m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin  className=' transition-transform duration-200 hover:scale-150' />
        <FaInstagram   className='transition-transform duration-200 hover:scale-150' />
        <a href={resume} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-150">
            <FaIdCard/>
        </a> 
        < FaGithub className='transition-transform duration-200 hover:scale-150' />
    </div>

   </nav>
  )
}

export default Navbar;