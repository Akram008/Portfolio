import React from 'react'
import { useState, useEffect } from 'react'

const projects = [
  {
    _id: 0, 
    image: "/photos/pro_1.jpg", 
    title: "E-commerce Site", 
    description: 'A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication, product browsing, shopping cart, secure checkout, and order management. The site is designed with a responsive UI and optimized for fast performance, delivering a seamless online shopping experience.',
    link: "https://www.buybusinessitems.store"
  },
  {
    _id: 1, 
    image: "/photos/pro_2.jpg", 
    title: "The Quite Page", 
    description: 'A modern social media platform built to encourage meaningful interactions in a distraction-free environment. Developed with the MERN stack, it includes features like user authentication, posts, comments, likes, follows, and real-time notifications. The app is designed with a clean responsive UI and leverages WebSockets for live updates, ensuring smooth and engaging user experiences.',
    link: "https://social-media-vite-6wyf.vercel.app"
  },
  {
    _id: 2, 
    image: "/photos/pro_3.jpg", 
    title: "Wikipedia",
    description: "Experience a new level of information access with a custom wikipedia search application that simplifies the search process. With a user-friendly interface and relevant results, users can expand their knowledge in no time. ", 
    link: "https://wikipediabyak.ccbp.tech"
  },
  {
    _id: 3, 
    image: "/photos/pro_4.jpg", 
    title: "NxtWatch", 
    description: "Built the Nxt Watch application, modelled after YouTube, enabling users to log in, explore video categories such as Trending and Gaming, access saved videos, and search for specific content while adjusting the interface theme.",
    link: "https://nxtwatchbyak.ccbp.tech"
  },
  {
    _id: 4, 
    image: "/photos/pro_5.jpg", 
    title: "Saudi Arabia Destination Portfolio",
    description: "A static website showcasing the beauty and culture of Saudi Arabia, built using pure HTML and CSS. The project highlights my ability to design responsive layouts, elegant typography, and visually appealing sections without relying on frameworks. It serves as a creative demonstration of building engaging web pages from scratch with clean, semantic code.", 
    link: "https://saudiarabiawebsite.netlify.app"
  },
  {
    _id: 5, 
    image: "/photos/pro_6.jpg", 
    title: "Rock Paper Scissors Game",
    description: "A fun and interactive game built with React.js, where users can choose between Rock, Paper, or Scissors, while the computer makes a random choice. The game logic updates scores dynamically based on the winner of each round, showcasing my skills in state management, conditional rendering, and handling user interactions with React.", 
    link: "https://rpsbyak.ccbp.tech"
  }
]

const Projects = () => {
   const [scrolled, setScrolled] = useState(true) 
  
    useEffect(()=>{
      const handleScroll = ()=>{
        setScrolled(window.scrollY > 100) 
      }
      window.addEventListener('scroll', handleScroll) 
      return ()=> window.removeEventListener('scroll', handleScroll) 
    }, [])

  return (
    <div className='w-full min-h-screen bg-linear-to-br from-black to-gray-900 pt-20 pb-10 px-15' id='projects'> 
        <h1 className={`text-center text-gray-200 story-script-regular mt-5 text-3xl md:text-6xl tracking-widest transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>WORK SHOWCASE</h1>
        <div className='w-full flex flex-col items-center gap-20 pt-5'> 
          {projects.map(project => (
            <div className=' flex flex-col md:flex-row items-center gap-10 p-3 pl-5 hover:cursor-pointer border-l-1 border-gray-200'>
              <img src={project.image} alt="" className='w-full sm:w-5/10 md:w-2/10 h-50 border-1 transition-all duration-300 hover:w-3/10 hover:h-60'/>
              <div className='w-full md:w-7/10 flex-col justify-between'>
                <p className=' text-gray-200 text-3xl libertinus-sans-regular mb-10'>{project.title}</p>
                <p className='text-gray-300 mb-3 libertinus-sans-regular'>{project.description}</p>
                <a href={project.link} target='_blank' className='text-gray-400 libertinus-sans-regular hover:text-gray-800 '>Visit </a>
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Projects