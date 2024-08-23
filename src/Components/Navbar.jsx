import React from 'react'
import { IoLocation } from "react-icons/io5";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbarr">
        <div className="row d-flex align-items-center">

        </div>
      </div>
      <div className="d-flex pt-2 pb-2 d-b justify-content-center img position-relative">
        <img className='pt-1' src="https://www.drybar.com/static/version1721809573/frontend/Hot/default/en_US/images/logo.svg" alt="" />
        <img className='img-2' src="https://www.drybar.com/static/version1721809573/frontend/Hot/default/en_US/images/logo-animation.svg" alt="" />
      </div>
      <div className="nav-link2">
        <ul>
          <li><Link to={"/hair-products"} className='black-link hair-hover'>Hair Products</Link></li>
          <li><Link to={"/hair-tool"} className='black-link'>Hair Tools</Link></li>
          <li><Link to={"gift-sets"} className='black-link'>Gifts & Sets</Link></li>
          <li><Link to={"/new"} className='black-link' style={{ color: 'black' }}>New</Link></li>
          <li><Link to={"/how-to"} className='black-link'>How To & Inspo</Link></li>
        </ul>
      </div>
      <div className="col-6 d-flex gap-2 justify-content-end">
        <CiSearch />
        <CiUser />
        <IoLocation />
        {/* <FiShoppingBag /> */}
      </div>
    </>
  )
}

export default Navbar