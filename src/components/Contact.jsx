import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='text-gray-300 bg-blue-950 h-screen w-full p-4 flex justify-center items-center'>
        <form method='post' action="https://getform.io/f/546d1569-45d0-4f37-928b-b824273958cc" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                <p className='py-4 '>Submit the form below or drop me an email - janarthanmanojkumar852@gmail.com</p>
            </div>

                <input className='bg-white p-2 my-2' type="text" placeholder='Name' name='name' />
                <input className='bg-white p-2 my-2 ' type='text' placeholder='Email' name='email'/>
                <textarea className='bg-white p-2 my-2' name="message" cols="30" rows="10" placeholder='Message'></textarea>
                <button className=' border-white border-2 my-8 px-4 py-3 p-2 text-white hover:bg-pink-600 hover:border-pink-600 flex items-center mx-auto'>LET'S COLLABERATE</button>

        </form>
    </div>
  )
}
