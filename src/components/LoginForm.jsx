import React, { useState } from "react";
import "./LoginForm.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoginForm = () => {
  let [formData, setFormData] = useState({
    email : '',
    password : ''
  })
  let navigate = useNavigate()

  const inputHandler = (ev)=>{
    let {name , value} = ev.target
    setFormData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const submitHandler = async(ev)=>{
    ev.preventDefault()
    let response = await axios.post('http://localhost:3000/user/login', formData, {withCredentials : true})
    if(response.data.status) navigate('/profile')
    else toast.error(response.data.mess)
  }
  return (
    <div className="login-form">
      <form action="" onSubmit={submitHandler}>
        <div className="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email.."
            onChange={inputHandler}
            value={formData.email}
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password.."
            onChange={inputHandler}
            value={formData.password}
          />
        </div>

        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm
