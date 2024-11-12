import React, { useState } from 'react'
import LoginAndRegister from '../components/loginAndRegister/LoginAndRegister'
import authService from '../appwrite/AuthService'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/Slices/authSlice'

function Login() {

  const handleLogout = async () => {
    const res = await authService.signout()
    console.log(res);
    
    if(res){
        dispatch(logout())
        navigate('/')
    }
}

// handleLogout()

  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(true)


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const loggedIn = await authService.login(email, password)
    loading && console.log('loading');
    
    if(loggedIn){
      const response = await authService.getUser() 
      if(response){
        const {name, email} = response
        dispatch(login({name, email}))
        setLoading(false)
        navigate('/')
      }
    }
  }

  return <LoginAndRegister loading={loading} handleSubmit={handleLoginSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
}

export default Login