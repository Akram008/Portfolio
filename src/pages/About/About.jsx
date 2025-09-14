import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen bg-gray-950 pt-20 pb-10 px-15' id='about'> 
        <h1 className='story-script-regular tracking-widest text-4xl md:text-6xl text-gray-100 text-center mt-10'>ABOUT ME</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-30 py-5'>
            <div className='flex flex-col w-full md:w-100 order-2 md:order-1'> 
                <h1 className='text-gray-200 tracking-widest libertinus-sans-bold mb-5 text-lg md:text-xl'>
                    <span className='text-gray-400 text-xl md:text-2xl'>MOHAMMAD AKRAM</span><br/>From TONK, RAJASTHAN, INDIA
                </h1> 
                <p className='text-gray-200 tracking-wide libertinus-sans-regular'>I’m a passionate Web Developer who loves turning ideas into functional, user-friendly digital experiences. I specialize in building modern websites and applications using the latest web technologies. With a strong focus on clean code and performance, I aim to deliver solutions that help businesses grow and stand out online.</p>
            </div>
            <div className='h-50 md:h-80 order-1 md:order-2'>
                <img src="/photos/portfolio_profile2.jpg" alt="" className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default About