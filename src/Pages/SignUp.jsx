import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

let signup = {
  email: "",
  tel: "",
  password: "",
};

const SignUp = () => {
  const [data, setData] = useState(signup);
  let { email, tel, password } = data;
  let oldData = [];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser(data)
  };

  const getData = (d) => {
    axios.post('http://localhost:3000/ac', { d })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  };


  let isSameUser = false


  const checkUser = (newData) => {
    axios.get('http://localhost:3000/ac')
      .then(res => {
        oldData = res.data;
      })
      .catch(err => console.log(err));
    oldData.forEach((el) => {
      let enterEmail = data.email
      let enterPhone = data.tel
      let oldEmail = el.d.email
      let oldPhone = el.d.tel
      if (enterEmail === oldEmail || enterPhone === oldPhone) {
        isSameUser = true;
      }
    });
    if (isSameUser) {
      alert('User already exists')
    } else {
      alert("cre")
      // getData(newData)
    }
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
