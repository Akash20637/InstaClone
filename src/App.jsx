import React from 'react'
import './App.css'
import UserRoutes from './routes/user.routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <UserRoutes />
      <ToastContainer/>
    </>
  )
}

export default App