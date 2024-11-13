import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
        lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] xl:lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] 
        md:gap-20 gap-16 lg:gap-10  bg-black text-white py-4 2xl:px-44 lg:px-26 md:px-20 px-10'>
            <div>
                <h3 className='text-2xl font-bold mb-4'>Exclusive</h3>
    
                <h4 className='mb-2'>Subscribe</h4>
                <div className='py-2 flex justify-evenly items-center rounded-full overflow-hidden bg-white w-[250px]'>
                    <input type="text" placeholder='Enter your email' className='outline-none text-black' />
                    <i className="fa-solid fa-paper-plane text-black cursor-pointer"></i>
                </div>
            </div>
            <div className='lg:m-auto flex flex-col justify-center'>
                <h3 className='text-2xl font-bold mb-4 '>Support</h3>
                <address>
                    Lorem-ipsum <br />
                    dolor, sit amet loremm<br />
                    consectetur, adipisicing <br />
                    elit. Hic, quae.
                </address>
                <br />
                <h4>
                    contact@example.com
                    <br />
                    +91-9876543210
                </h4>
            </div>
            <div className='lg:m-auto'>
                <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
                <Link to="/privacy-policy" >Privacy Policy</Link>
                <h4>Term of use</h4>
                <h4>FAQ</h4>
            </div>
            <div className='lg:m-auto'>
                <h3 className='text-2xl font-bold mb-4'>Download App</h3>
                <img className='bg-white p-0.5 w-16 rounded-md mb-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/552px-QR_Code_Example.svg.png?20111025115625" alt="" />
                <small>Save $3 with App (New Users only)</small>
                <div className='flex gap-2 mt-2'>
                    <i className="fa-brands fa-facebook hover:text-blue-400 "></i>
                    <i className="fa-brands fa-twitter hover:text-blue-400"></i>
                    <i className="fa-brands fa-instagram hover:text-blue-400"></i>
                    <i className="fa-brands fa-linkedin hover:text-blue-400"></i>
                </div>
            </div>
        </div>
            <div className='bg-black text-center p-2'>
                <p className='text-gray-400 text-xs'>Made with 💖 by Arjun Khatri</p>
            </div>
    </footer>
  )
}

export default Footer