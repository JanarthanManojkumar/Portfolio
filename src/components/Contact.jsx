import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='text-[#B6BBC4] bg-[#31304D] h-full w-full p-4 flex justify-center items-center'>
        <form method='post' action="https://getform.io/f/546d1569-45d0-4f37-928b-b824273958cc" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#BB9CC0] '>Contact</p>
                <p className='py-4'>Submit a form below or drop me an email -janarthanmanojkumar852@gmail.com</p>
            </div>

                <input className='bg-[#F0ECE5] p-2 my-2' type="text" placeholder='Name' name='name' />
                <input className='bg-[#F0ECE5]  p-2 my-2 ' type='text' placeholder='Email' name='email'/>
                <textarea className='bg-[#F0ECE5]  p-2 my-2' name="message" cols="30" rows="10" placeholder='Message'></textarea>
                <button className=' border-white border-2 my-8 px-4 py-3 p-2 bg-[#F0ECE5]  hover:bg-[#BB9CC0] hover:border-[#BB9CC0] flex items-center mx-auto'>LET'S COLLABERATE</button>

        </form>
    </div>
  )
}
