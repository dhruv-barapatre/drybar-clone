import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Service'
import Book from '../Pages/Book'
import HairProducts from '../PagesForHome/HairProducts'
import Hairtool from '../PagesForHome/Hairtool'
import Gift from '../PagesForHome/Gift'
import Newpage from '../PagesForHome/Newpage'
import HowTo from '../PagesForHome/HowTo'

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/hair-products' element={ <HairProducts   />}></Route>
        <Route path='/hair-tool' element={ <Hairtool   />}></Route>
        <Route path='/gift-sets' element={ <Gift   />}></Route>
        <Route path='/new' element={ <Newpage   />}></Route>
        <Route path='/how-to' element={ <HowTo />}></Route>
      </Routes>
    </>
  )
}

export default Allroutes