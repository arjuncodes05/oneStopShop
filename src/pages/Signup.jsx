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
  const [error, setError] = useState({})

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const rules = {
      name: [
        { required: true, message: 'Please provide a name!'},
        {minLength: 3, message: 'Too short to be a name, try something different!'}
      ], 
      email: [
        {required: true, message: 'Please provide an email!'},
        {
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Please provide a valid email!'
        }
      ],
      password: [
        {required: true, message: 'Please choose a password!'},
        {minLength: 8, message: 'Password must be atleast 8 characters long!'}
      ]
    }


  const validateFormData = (formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      rules[key].some((rule) => {
        if(rule.required && !value){
          errorsData[key] = rule.message
          return true
        }

        if(rule.minLength && value.length < rule.minLength){
          errorsData[key] = rule.message
          return true
        }

        if(rule.pattern && !rule.pattern.test(value)){
          errorsData[key] = rule.message
          return true
        }
      })
    })
    setError(errorsData)
    return errorsData
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault()

    const validationresult = validateFormData({name, email, password})
    if(Object.keys(validationresult).length) return

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

  return <LoginAndRegister error={error} setError={setError} loading={loading} handleSubmit={handleSignupSubmit} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
}

export default Signup