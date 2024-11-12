import React from 'react'

function Contact() {
  return (
    <div className='flex gap-4'>
      <div className='border-2 rounded-sm p-4 w-[50%]'>
        <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
        <h2 className='mb-4 font-semibold text-lg'>Feel free to ask anything!</h2>
        <hr />
        <form action="">
          <div className='flex flex-col my-4 gap-1'>
            <label htmlFor="name">Name</label>
            <input id='name' className='border rounded-sm p-1 outline-none' type="text" placeholder='Enter your name' />
          </div>
          <div className='flex flex-col my-4 gap-1'>
            <label htmlFor="email">Email</label>
            <input id='email' className='border rounded-sm p-1 outline-none' type="text" placeholder='Enter your email' />
          </div>
          <div className='flex flex-col my-4 gap-1'>
            <label htmlFor="message">Message</label>
            <textarea className='border rounded-sm p-1 outline-none' name="message" id="message" placeholder='Enter your message' ></textarea>
          </div>
          <div className='w-full flex justify-end mt-4'>
            <button className='bg-green-600 hover:bg-green-700 py-2 px-4 font-bold text-white font-semobold rounded-full'>Send <i className="ml-2 fa-solid fa-circle-arrow-right"></i></button>
          </div>
        </form>
      </div>

      <div className='w-[40%]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4686291385974!2d77.85642127535799!3d30.36604807476323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2a395135f75d%3A0xc3ede1afe67a8f30!2sHaripur%20Rd%2C%20Central%20Hope%20Town%2C%20Selakui%2C%20Uttarakhand%20248011!5e0!3m2!1sen!2sin!4v1731254540640!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact