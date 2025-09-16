import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";

import { RxCross2 } from "react-icons/rx";
import { motion } from 'motion/react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false) 
  const [isOpen, setIsOpen] = useState(false) 

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrolled(window.scrollY > 400) 
    }
    window.addEventListener('scroll', handleScroll) 
    return ()=> window.removeEventListener('scroll', handleScroll) 
  }, [])

  return (
    <div className={`w-full z-10 fixed transition-colors duration-500 ${scrolled ? 'bg-black/75' : 'bg-transparent'}`}> 
      <div className='w-full flex justify-between items-center px-10 py-5'> 
        
        <h1 className='text-white text-2xl story-script-regular'>Akram</h1>

        <button className='text-white text-2xl md:hidden' onClick={()=>setIsOpen(!isOpen)}> 
          {isOpen ? <RxCross2/> : <HiMenuAlt4/>}
        </button>

        <div className='hidden md:flex items-center justify-center gap-10 libertinus-sans-regular'>  
          <a href='#home' className='text-white text-md'>Home</a>
          <a href='#projects' className='text-white text-md'>Projects</a>
          <a href='#skills' className='text-white text-md'>Skills</a>
          <a href='#about' className='text-white text-md'>About Me</a>
          <a href='#contactUs' className='text-white text-md'>Contact Us</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-full flex flex-col md:hidden`}> 
        <a href='#home' className='text-center border-b-1 py-3 text-md text-white' onClick={()=>setIsOpen(!isOpen)}>Home</a>
        <a href='#projects' className='text-center border-b-1 py-3 text-md text-white' onClick={()=>setIsOpen(!isOpen)}>Projects</a> 
        <a href='#skills' className='text-center border-b-1 py-3 text-md text-white' onClick={()=>setIsOpen(!isOpen)}>Skills</a>
        <a href='#about' className='text-center border-b-1 py-3 text-md text-white' onClick={()=>setIsOpen(!isOpen)}>About</a>
        <a href='#contactUs' className='text-center py-3 text-md text-white' onClick={()=>setIsOpen(!isOpen)}>Contact Us</a>
      </motion.div>}

    </div>
  )
}

export default Header