import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

let signup = {
  email: "",
  tel: "",
  password: "",
};

const SignUp = () => {
  const [data, setData] = useState(signup);
  const navigate=useNavigate();

  let oldData = [];
  const [olddata, setolddata] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser()
  };

  const getData = (d) => {
    axios.post('https://drybar-backside.onrender.com/accData', { d })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  };


  let isSameEmail = false;
  let isSameTel = false


  const checkUser = () => {
    axios.get('https://drybar-backside.onrender.com/accData')
      .then(res => {
        res.data.map((el) => {
          if (data.email == el.d.email) {
            isSameEmail = true;
          }
          if (data.tel == el.d.tel) {
            isSameTel = true;
          }
        })
        if (!isSameEmail && !isSameTel) {
          alert("Account creted Succesfuly")
          getData(data)
          navigate("/login")
        }
        else if (isSameEmail && isSameTel) {
          alert("User Is Already Registred")
        }
        else if (isSameEmail) {
          alert("Email is already Register")
        }
        else if (isSameTel) {
          alert("Phone Number is already Register")
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center">
        <div className="border">
          <h4>Sign Up</h4>
          <form onSubmit={handleSubmit} action="">
            <input required onChange={handleChange} name='email' type="email" placeholder='Enter Your Email' />
            <input required onChange={handleChange} name='tel' type="tel" className='mt-4' placeholder='Enter Your phone' />
            <input required onChange={handleChange} name='password' className='mt-4' type="password" placeholder='Enter Your Password' />
            <input className='mt-4 btn' type="submit" value="Sign Up" />
          </form>
          <Link to={"/login"}><p className='mt-2'>Have An Account?</p></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;