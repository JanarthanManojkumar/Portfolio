import React from 'react'
import WorkImage from '../assets/projects/workImg.jpeg'
import '../index.css';

export const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen h-full  bg-[#31304D] text-gray-300'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#BB9CC0]'>WORKS</p>
                <p className='py-6'>Checkout some of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${WorkImage})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div">
                   
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>

                            <a href="" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImage})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div ">
                   
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>

                            <a href="" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImage})`}} className="shadow-lg shadow-[#040c16] group container  
                        flex justify-center text-center items-center mx-auto content-div ">
                   
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>

                            <a href="" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImage})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div ">
                   
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>

                            <a href="" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImage})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div ">
                   
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>

                            <a href="" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImage})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div ">
                   
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>

                            <a href="" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}