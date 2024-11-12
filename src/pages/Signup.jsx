import React, { useState } from 'react'
import LoginAndRegister from '../components/loginAndRegister/LoginAndRegister.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/AuthService.js'
import { login } from '../store/Slices/authSlice.js'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const accountCreated = await authService.signup(name, email, password)
    if(accountCreated){
      const loggedIn = await authService.login(email, password)
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
  }

  return <LoginAndRegister loading={loading} handleSubmit={handleSignupSubmit} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
}

export default Signup