import React from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
  return (
    <div className='register-form'>

      <form action="">
        <div className="username">
          <input type="text" name="username" id="username" placeholder='Enter your username..' />
        </div>
        <div className="name">
          <input type="text" name="name" id="name" placeholder='Enter your name..' />
        </div>
        <div className="email">
          <input type="email" name="email" id="email" placeholder='Enter your email..' />
        </div>
        <div className="password">
          <input type="password" name="password" id="password" placeholder='Enter your password..' />
        </div>

        <button className='register-button'>Register</button>
      </form>


    </div>
  )
}

export default RegisterForm