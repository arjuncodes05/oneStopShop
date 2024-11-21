import React, { useState } from 'react'
import LoginAndRegister from '../components/loginAndRegister/LoginAndRegister'
import authService from '../appwrite/AuthService'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/Slices/authSlice'

function Login() {

  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState('')


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const loggedIn = await authService.login(email, password)

    if(loggedIn){
      const response = await authService.getUser() 

      if(response){
        const {name, email, $id : currentUserid} = response
        
        dispatch(login({name, email, currentUserid}))
        setLoading(false)
        navigate('/')
      } 
    } else {
      setLoginError('Invalid credentials')
      setLoading(false)
    }
  }

  return <LoginAndRegister loginError={loginError} loading={loading} handleSubmit={handleLoginSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
}

export default Login