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
    <div name='skills' className='bg-blue-950 text-gray-300 h-screen  w-full' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-screen w-full '>
            
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>SKILLS</p>
                <p className='py-4'>These are the technologies I'v worked with</p>
            </div>
        

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4 px-4'>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} alt="" className='w-20 mx-auto' />
                <p className='my-4' >HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={JS} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >JAVASCRIPT</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={REACTJS} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >REACT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={NODE} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >SPRING BOOT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={FIREBASE} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >FIREBASE</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={AWS} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={MONGO} alt="" className='w-20 mx-auto ' />
                <p className='my-4' >MONGO DB</p>
            </div>
         </div>
     </div>

    </div>
  )
}
