import React from 'react'
import {motion} from 'motion/react'


const Home = () => {

  const text = 'Mohammad Akram'

  return (
    <div className='relative top-0 left-0 w-full h-screen p-0' id='home'> 
      <video className='absolute top-0 left-0 w-full h-full object-cover -z-10'
        playsInline
        autoPlay 
        loop
        muted
      >
        <source src="/videos/2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      <div className='bg-black/75 h-full w-full flex flex-col items-center justify-center pt-20 px-15'> 
        <h1 className='text-3xl md:text-6xl story-script-regular tracking-widest text-gray-200 text-center'>
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        
        <p className='text-gray-400 libertinus-sans-bold'>A FullStack Web-Developer</p>
        
        <p className='text-gray-200 w-full md:w-150 mt-15 libertinus-sans-regular tracking-wider text-center'>A self-taught web developer with a love for building impactful web experiences. My goal is simple: craft websites that look great, work flawlessly, and deliver results.</p>
        
        <button className='text-gray-200 border-1 border-gray-400 hover:shadow-md hover:shadow-gray-300 cursor-pointer rounded-3xl mt-20 px-7 py-2 transition-all duration-500'>Projects</button>
      </div>
    </div>
  
  )
}

export default Home