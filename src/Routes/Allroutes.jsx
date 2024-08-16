import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Service'
import Book from '../Pages/Book'
import HairProducts from '../Components/HairProducts'
import Hairtool from '../Components/Hairtool'
import Gift from '../Components/Gift'
import Newpage from '../Pages/Newpage'

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/hair-products' element={ <HairProducts   />}></Route>
        <Route path='/hair-tool' element={ <Hairtool   />}></Route>
        <Route path='/gift-sets' element={ <Gift   />}></Route>
        <Route path='/new' element={ <Newpage   />}></Route>
      </Routes>
    </>
  )
}

export default Allroutes