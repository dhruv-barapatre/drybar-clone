import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
let login = {
  email: "",
  tel: "",
  password: "",
};
const Login = () => {
  const [accdata, setaccdata] = useState([])//get data from server
  const [data, setData] = useState(login);//getdata from input box 


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    checkuser()
  }

  const getData = () => {
    axios.get("http://localhost:3000/accData")
      .then(res => {
        setaccdata(res.data)
        console.log(res.data)
      }
      )
      .catch(err => console.log(err))
  }

  const checkuser = () => {
    let useravailable = false;
    let Incooreectpas = false;
    accdata.forEach((el) => {
      if (data.email == el.d.email || data.password == el.d.password) {
        useravailable = true
        if (data.password != el.d.password) {
          Incooreectpas = true
        }
      }
    })


    if (useravailable) {
      if (Incooreectpas) {
        alert("Incorrect Password")
      } else {
        alert("Login Success")
      }
    } else {
      alert("Email Is Not Found")
    }

  }


  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='login'>
      <Navbar />
      <h1 className='text-center'>LOGIN PAGE</h1>
      <div className="d-flex justify-content-center algin-items-center">
        <div className="border">
          <h4>Login</h4>
          <form action="" onSubmit={handlesubmit}>
            <input onChange={(e) => handleChange(e)} name='email' type="email" placeholder='Enter Your Email' />
            <input onChange={(e) => handleChange(e)} name='password' className='mt-4' type="password" placeholder='Enter Your Password' />
            <input className='mt-4 btn' type="submit" value="Sign In" />
          </form>
          <Link to={"/sign-up"}><p className='mt-2'>Don't Have Account ?</p></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;