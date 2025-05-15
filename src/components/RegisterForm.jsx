import React, { useState } from 'react';
import './RegisterForm.css';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: ''
  });

  const submitHandler = async (ev) => {
    ev.preventDefault();
    let response = await axios.post('http://localhost:3000/user/register', formData)

    setFormData({
      username: '',
      name: '',
      email: '',
      password: ''
    })
    
    if(response.data.status) {
      toast.success("User Register Successfully")
      setTimeout(()=>{
        navigate('/')
      }, 1000)

    }
    else toast.error(response.data.mess)

  };

  const inputHandler = (ev) => {
    const { name, value } = ev.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  };

  return (
    <div className='register-form'>
      <form onSubmit={submitHandler}>
        <div className="username">
          <input
            type="text"
            name="username"
            placeholder='Enter your username..'
            value={formData.username}
            onChange={inputHandler}
          />
        </div>
        <div className="name">
          <input
            type="text"
            name="name"
            placeholder='Enter your name..'
            value={formData.name}
            onChange={inputHandler}
          />
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            placeholder='Enter your email..'
            value={formData.email}
            onChange={inputHandler}
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder='Enter your password..'
            value={formData.password}
            onChange={inputHandler}
          />
        </div>

        <button type="submit" className='register-button'>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
