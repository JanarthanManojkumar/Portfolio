import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faFile, faPerson, faPersonArrowUpFromLine, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
      setClick(!click);
    };

    const handleClose=()=>{
      setClick(false)
    }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161A30] text-[#B6BBC4]  z-3">
        <div>
            <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
        </div>

     <div className="md:hidden z-10">
        <FontAwesomeIcon icon={click ? faTimes : faBars} onClick={handleClick} />
      </div>

      <ul className={`md:flex md:justify-end md:items-center
                      ${click ? 'fixed top-0 left-0 h-full w-full bg-[#161A30] flex flex-col items-center justify-center hover:text-[#F0ECE5] hover:transition-all z-10' 
                      : 'hidden'}`} onClick={handleClose}>
       
        <li><Link to="home" smooth={true} duration={500} offset={-window.innerHeight / 4} onClick={handleClose}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-window.innerHeight/8} onClick={handleClose}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-window.innerHeight/8} onClick={handleClose}>Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500} offset={-window.innerHeight/8} onClick={handleClose}>Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-window.innerHeight/8} onClick={handleClose}>Contact</Link></li>

      </ul>

      <div className="hidden md:flex fixed flex-col top-[35%] left-0 ">
        <ul className=''>
         
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="" className='flex justify-around items-center w-full text-[#B6BBC4] '>LinkedIn<FontAwesomeIcon icon={faLinkedinIn} /></a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a href="" className='flex justify-around items-center w-full text-[#B6BBC4] '>Github<FontAwesomeIcon icon={faGithub} className='ml-5'/></a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#872341]'>
            <a href="" className='flex justify-around items-center w-full text-[#B6BBC4] '>Mail<FontAwesomeIcon icon={faEnvelope} className='ml-9'/></a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900'>
            <a href="" className='flex justify-around items-center w-full text-[#B6BBC4] '>CV<FontAwesomeIcon icon={faFile} className='ml-11'/></a>
          </li>

          

        </ul>
      </div>


    </div>
  );
}
