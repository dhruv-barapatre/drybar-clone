import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Service'
import Book from '../Pages/Book'
import HairProducts from '../Components/HairProducts'

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/hair-products' element={ <HairProducts />}></Route>
      </Routes>
    </>
  )
}

export default Allroutes