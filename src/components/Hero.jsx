import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div name='home' className='bg-blue-950 h-screen w-full'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-white'>Janarthan Manojkumar</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full-Stack Developer.</h2>
          <p className='text-gray-400 py-4 max-w-[700px]' >I'm a Full-Stack developer specialized in building exceptional digital experiences 
            using React and Springboot.Currently,  I am focued on building responsive 
            full-stack web applications.</p>

            <div>
              <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <FontAwesomeIcon icon={faArrowRight} className='ml-3'/></button>
            </div>

      </div>
    </div>
  )
}
