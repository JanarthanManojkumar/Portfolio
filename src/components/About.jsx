import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-screen h-screen  bg-[#31304D] text-gray-300 '>
        <div className='flex flex-col justify-center items-center h-full'>
           
           <div className='max-w-[1000px] w-full mx-auto grid grid-cols-2 gap-8 px-4'>
            
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#BB9CC0]'>ABOUT</p>
                </div>
            
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className=' text-4xl font bold sm:text-right'>
                    <p>Hi i'm Janarthan nice to meet you please take a look around.</p>
                </div>

                <div>
                    <p>I'm passionate about building excellent software that imporves the lives of those around me.
                        I specialize in creating software for clients ranging from individuals and small-business all 
                        the way to large enterprise coporation .what would you do if you had a software expert at your 
                        fingertips 
                     </p>
                </div>

            </div>
           
        </div>
    </div>
  )
}