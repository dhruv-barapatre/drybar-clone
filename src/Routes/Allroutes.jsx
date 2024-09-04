import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Service'
import HairProducts from '../PagesForHome/HairProducts'
import Hairtool from '../PagesForHome/Hairtool'
import Gift from '../PagesForHome/Gift'
import Newpage from '../PagesForHome/Newpage'
import HowTo from '../PagesForHome/HowTo'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hair-products' element={ <HairProducts   />}></Route>
        <Route path='/hair-tool' element={ <Hairtool   />}></Route>
        <Route path='/gift-sets' element={ <Gift   />}></Route>
        <Route path='/new' element={ <Newpage   />}></Route>
        <Route path='/how-to' element={ <HowTo />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
      </Routes>
    </>
  )
}

export default Allroutes