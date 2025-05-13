import React from 'react'
import instaLogo from '../assets/Instagram-logo.svg'
import './Register.css'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className='register-layout'>

      <div className="images">
        <img src={instaLogo} alt="" />
      </div>

      <RegisterForm/>

      <div className="link">
        <span>Have Account ! </span>
        <a>Login</a>
      </div>
      
    </div>
  )
}

export default Register