import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-20 justify-items-center bg-black text-white px-10 py-10 mt-10'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-bold pl-2 mb-4'>Exclusive</h3>
    
                <h4 className='pl-2'>Subscribe</h4>
                <div className='py-2 px-5 rounded-full overflow-hidden bg-white'>
                    <input type="text" placeholder='Enter your email' className='outline-none text-black' />
                    <i className="fa-solid fa-paper-plane text-black cursor-pointer"></i>
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-4'>Support</h3>
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
            <div>
                <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
                <Link to="/privacy-policy" >Privacy Policy</Link>
                <h4>Term of use</h4>
                <h4>FAQ</h4>
            </div>
            <div>
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