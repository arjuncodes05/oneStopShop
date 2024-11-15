import React, { useState } from 'react'
import tick from "../assets/Contact page/tick.gif"
import { formValidation } from '../formValidation'

const web3formsContactForm = String(import.meta.env.VITE_APP_WEB3FORMS_CONTACT_FORM)

function Contact() {

  const [dialogueBox, setDialogueBox] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", web3formsContactForm);

    const object = Object.fromEntries(formData);

    // validating form
    const validationresult = formValidation(object, setError)
    if(Object.keys(validationresult).length) return

    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }

    setDialogueBox(true)
  };

  return (
    <div className='flex gap-4 flex-col lg:flex-row'>
      <div className='relative border-2 rounded-sm p-4 lg:w-[50%] w-full lg:max-h-[480px]'>
        <h1 className='sm:text-4xl text-2xl font-bold'>Contact Us</h1>
        <h2 className='mb-2 font-semibold sm:text-lg text-md'>Feel free to ask anything!</h2>
        <hr />
        <form onSubmit={onSubmit}>
          <div className='flex flex-col my-4 gap-1'>
            <label htmlFor="name">Name</label>
            <input id='name' name='name' className='border rounded-sm p-1 outline-none' type="text" placeholder='Enter your name' />
            <p className='text-red-600 md:h-3' >{error.name}</p>
          </div>
          <div className='flex flex-col my-4 gap-1'>
            <label htmlFor="email">Email</label>
            <input id='email' name='email' className='border rounded-sm p-1 outline-none' type="text" placeholder='Enter your email' />
            <p className='text-red-600 md:h-3' >{error.email}</p>
          </div>
          <div className='flex flex-col my-4 gap-1'>
            <label htmlFor="message">Message</label>
            <textarea className='border rounded-sm p-1 outline-none' name="message" id="message" placeholder='Enter your message' ></textarea>
            <p className='text-red-600 md:h-3'>{error.message}</p>
          </div>
          <div className='w-full flex justify-end mt-4'>
            <button className='bg-green-600 hover:bg-green-700 py-2 px-4 font-bold text-white font-semobold rounded-full'>Send <i className="ml-2 fa-solid fa-circle-arrow-right"></i></button>
          </div>
        </form>

       { dialogueBox && (<div className='bg-slate-100 md:w-[350px] sm:w-[300px] w-[240px] flex flex-col items-center justify-center h-[250px] absolute top-0 right-[50%] translate-x-2/4	translate-y-1/2 rounded-lg shadow-xl'>
          <img src={tick} alt="Message Sent" className='w-[125px]'/>
          <h4 className='font-bold'>Success</h4>
          <p>Message sent successfully!</p>
          <button
            onClick={() => setDialogueBox(false)} 
            className='p-2 px-4 bg-slate-200 hover:bg-slate-300 rounded-md font-semibold my-2'>Ok</button>
        </div>)}
      </div>

      <div className='lg:w-[50%] w-full h-[400px] lg:h-[480px] '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4686291385974!2d77.85642127535799!3d30.36604807476323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2a395135f75d%3A0xc3ede1afe67a8f30!2sHaripur%20Rd%2C%20Central%20Hope%20Town%2C%20Selakui%2C%20Uttarakhand%20248011!5e0!3m2!1sen!2sin!4v1731254540640!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact