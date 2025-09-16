import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { PiReadCvLogo } from "react-icons/pi";
import { FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <div className='h-screen w-full pt-20 bg-[#eef2f3]' id='contactUs'> 
        <div className='h-2/3 px-10'>
            <h1 className='text-center text-gray-900 text-3xl md:text-6xl font-semibold mb-5 story-script-regular'>Contact Me</h1> 
            <p className='text-2xl md:text-4xl font-bold text-[#232526] mb-3 libertinus-sans-bold'>For any Collaboration And Projects...</p> 
            <p className='text-2xl md:text-4xl font-bold text-[#232526] libertinus-sans-bold'>Connect with me via E-mail/Phone-No.</p>
            <div className='flex flex-col items-center mt-5'>
                <p className='mb-3 font-semibold text-lg libertinus-sans-bold text-gray-900'>Social Media Handles</p> 
                {/*<p className='text-[#232526] mb-1 w-1/3 libertinus-sans-regular'><a className='flex justify-center items-center gap-3' href=""><FaInstagram/> Instagram</a></p>*/}
                
                <p className='text-[#232526] mb-1 w-1/3 libertinus-sans-regular'><a className='flex justify-center items-center gap-3' href="https://www.linkedin.com/in/mohammad-akram-949833232" target='_blank'><FaLinkedin /> LinkedIn</a></p>
                
                <p className='text-[#232526] mb-1 w-1/3 libertinus-sans-regular'><a className='flex justify-center items-center gap-3' href="https://x.com/a_k_r_4m"><FaSquareXTwitter /> X/Twitter</a></p>
            </div>
        </div>
        <div className='h-1/3 w-full bg-[#232526] flex justify-between gap-2 p-8 libertinus-sans-regular'> 
            <ul className='text-gray-200 flex flex-col gap-3'>
                <li className='text-sm flex items-center gap-2'><span className='font-semibold'><HiOutlineMail/></span> khanakram32392@gmail.com</li>
                <li className='text-sm flex items-center gap-2'><span className='font-semibold'><MdOutlinePhone/></span> +91 6350164284</li> 
            </ul>
            <ul className='text-gray-200 flex flex-col gap-3'>
                <li className='text-sm flex items-center gap-2'><span className='font-semibold'><PiReadCvLogo/></span><a href="/documents/resume.pdf" target='_blank' rel='noopener noreferrer'>Resume</a></li> 
            </ul>
            
        </div>
    </div>
  )
}

export default ContactUs