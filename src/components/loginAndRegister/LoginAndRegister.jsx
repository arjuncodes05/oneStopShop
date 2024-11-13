import React from 'react'
import InputField from '../../components/InputField'
import loginBoxBg from "../../assets/loginBoxBg.jpg"
import { Link, useLocation } from 'react-router-dom'

function LoginAndRegister({name = '', setName = '', email, setEmail, password, setPassword, handleSubmit, loading}) {

   const pageIs =  useLocation().pathname

  return (
    <div
    className=' backdrop-blur-md flex justify-center  items-center w-full h-screen bg-slate-200'
    >
    <div className='w-[420px] min-w-[300px] border-2 rounded-md overflow-hidden mx-10'>
      <div className='w-full text-center font-bold text-2xl bg-slate-900 p-2 mb-1 '>
          <h1 className='text-6xl mb-2 text-white'>{pageIs.includes('signup') ? 'Sign Up' : 'Login' }</h1>
          <h2 className='text-[#FF204E]'>{pageIs.includes('signup') ? 'Create an account' : 'Welcome Back' }</h2>
      </div>
      <div 
        style={{ 
          backgroundImage: `url(${loginBoxBg})`,
          backgroundSize: 'cover',
          backgroundPOsition: 'center',
          }} 
          className=' shadow-md shadow-slate-800 px-6  pt-10 pb-14'
        >
        <form onSubmit={handleSubmit} >
          {
          pageIs.includes('signup') &&
              <InputField label='Name' setValue={setName} getValue={name} id='name' placeholder='Enter your name' labelColor='text-[#FF204E]' />
          }
            <InputField setValue={setEmail} getValue={email} label='Email' id='email' placeholder='Enter your email' labelColor='text-[#FF204E]' />
            <InputField setValue={setPassword} getValue={password} label='Password' id='password' type='password' placeholder='Enter your password' labelColor='text-[#FF204E]' />
            <button className='bg-[#e62b50] hover:bg-[#FF204E] p-2 rounded-full w-full my-4'>{pageIs.includes('signup') ? loading ? 'Signing up...' : 'Sign up' : loading ? 'Logging in...' : 'Login'} </button>
            <div className='text-center'>
                <Link className=' text-white hover:text-slate-400 underline' to={pageIs.includes('signup') ? '/login' : '/signup'} > {pageIs.includes('signup') ? 'Already have an account?' : 'Don\'t have an account?'}</Link>
            </div>
            <div className='rounded-lg text-center mt-4'>
              <Link to='/' className='bg-red-50 hover:bg-red-200 px-4 py-1.5 rounded-full'>Continue without an account...</Link>
            </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginAndRegister