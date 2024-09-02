import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <Navbar />
      <h1 className='text-center'>LOGIN PAGE</h1>
      <div className="d-flex justify-content-center algin-items-center">
        <div className="border">
          <h4>Login</h4>
          <input type="email" placeholder='Enter Your Email' />
          <input className='mt-4' type="password" placeholder='Enter Your Password' />
          <input className='mt-4 btn' type="button" value="Sign In" />
          <Link><p className='mt-2'>Forgot Password ?</p></Link>
          <Link><p className='mt-2'>Don't Have Account ?</p></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login