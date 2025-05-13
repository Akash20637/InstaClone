import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='login-form'>

      <form action="">
        <div className="email"> 
          <input type="email" name="email" id="email" placeholder='Enter your email..' />
        </div>
        <div className="password">
          <input type="password" name="password" id="password" placeholder='Enter your password..' />
        </div>

        <button className='login-button'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm