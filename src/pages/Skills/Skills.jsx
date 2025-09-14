import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaPython, FaGithub   } from "react-icons/fa";
import { IoLogoJavascript, IoIosSettings  } from "react-icons/io";
import { SiExpress, SiSqlite, SiMongodb  } from "react-icons/si";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";

const Skills = () => {
  return (
    <div className='min-h-screen w-full pt-20 px-10 pb-10 bg-linear-to-b from-black to-gray-900' id='skills'>
        <h1 className='text-gray-200 text-4xl md:text-6xl text-center story-script-regular my-5'>
            Tech Stack
        </h1>
        <div className='w-full flex justify-between flex-wrap gap-10 pt-5'> 
            <div className=' flex flex-col text-center md:text-start'>
                <h2 className='text-gray-300 text-2xl libertinus-sans-bold mb-5'>Frontend</h2>
                <ul className='flex flex-col gap-2 text-gray-200'>
                    <li className='flex items-center gap-2 text-md '><FaHtml5/> HTML</li>
                    <li className='flex items-center gap-2 text-md '><FaCss3/> CSS</li>
                    <li className='flex items-center gap-2 text-md '><IoLogoJavascript/> JavaScript</li>
                    <li className='flex items-center gap-2 text-md '><FaReact/> React.js</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-gray-300 text-2xl libertinus-sans-bold mb-5'>Backend</h2>
                <ul className='flex flex-col gap-2 text-gray-200'>
                    <li className='flex items-center gap-2 text-md'><FaNodeJs/> Node.js</li>
                    <li className='flex items-center gap-2 text-md'><SiExpress/> Express.js</li>
                    <li className='flex items-center gap-2 text-md'><MdSystemSecurityUpdateGood/> JWT Authentication</li>
                    <li className='flex items-center gap-2 text-md'><IoIosSettings/> REST APIs</li>
                    <li className='flex items-center gap-2 text-md'><FaPython/> Python</li>
                    <li className='flex items-center gap-2 text-md'><TbBrandSocketIo/> WebSockets/Socket.io</li>
                    <li className='flex items-center gap-2 text-md'><FaGithub/> Version Control - Git, GitHub</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-gray-300 text-2xl libertinus-sans-bold mb-5'>Database</h2>
                <ul className='flex flex-col gap-2 text-gray-200'>
                    <li className='flex items-center gap-2 text-md'><SiSqlite/> SQLite</li>
                    <li className='flex items-center gap-2 text-md'><SiMongodb/> MongoDB</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills