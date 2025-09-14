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
      setScrolled(window.scrollY > 100) 
    }
    window.addEventListener('scroll', handleScroll) 
    return ()=> window.removeEventListener('scroll', handleScroll) 
  }, [])

  return (
    <div className='w-full bg-black/75 z-10 fixed'> 
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
          <p className='text-white text-md'>Contact Us</p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-full flex flex-col md:hidden`}> 
        <p className='text-center border-b-1 py-3 text-md text-white'>Home</p>
        <p className='text-center border-b-1 py-3 text-md text-white'>Projects</p> 
        <p className='text-center border-b-1 py-3 text-md text-white'>Skills</p>
        <p className='text-center border-b-1 py-3 text-md text-white'>About</p>
        <p className='text-center py-3 text-md text-white'>Contact Us</p>
      </motion.div>}

    </div>
  )
}

export default Header