import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import REACTJS from '../assets/react.png';
import NODE from '../assets/node.png';
import FIREBASE from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GITHUB from '../assets/github.png';
import TAILWIND from '../assets/tailwind.png';
import MONGO from '../assets/mongo.png';

export const Skills = () => {
  return (
    <div name='skills' className='bg-[#31304D] text-gray-300 h-screen w-full z-2' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  md:h-screen w-full '>
            
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#BB9CC0] '>SKILLS</p>
                <p className='py-4'>These are the technologies I'v worked with</p>
            </div>
        

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center md:py-4 py-2'>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} alt="" className='md:w-[35%] w-[25%]  mx-auto' />
                <p className='my-4 md:text-xl text-xs' >HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={JS} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >JAVASCRIPT</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={REACTJS} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >REACT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={NODE} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >SPRING BOOT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={FIREBASE} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >FIREBASE</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={AWS} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={MONGO} alt="" className='md:w-[35%] w-[25%] mx-auto ' />
                <p className='my-4 md:text-xl text-xs' >MONGO DB</p>
            </div>
         </div>
     </div>

    </div>
  )
}