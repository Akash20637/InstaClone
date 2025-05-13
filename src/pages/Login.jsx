import React from 'react'
import instaLogo from '../assets/Instagram-logo.svg'
import './Login.css'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='login-layout'>

      <div className="images">
        <img src={instaLogo} alt="" />
      </div>

      <LoginForm/>

      <div className="link">
        <span>Dont Have Account ! </span>
        <a>Register</a>
      </div>
      
    </div>
  )
}

export default Login