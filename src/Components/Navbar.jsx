import React from 'react'
import { IoLocation } from "react-icons/io5";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navber d-b px-3 d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link to={"/"}>
            <img className='img-1' src="https://www.drybar.com/media/logo/websites/73/drybar_logo_1.svg" alt="" />
            <img className='img-2' src="https://www.drybar.com/static/version1724185896/frontend/MagebitHoT/drybar/en_US/Magento_Theme/svg/logo-hairdryer.svg" alt="" />
          </Link>
        </div>
        <ul>
          <li><Link to={"/"} className="black-link">Home</Link></li>
          <li><Link to={"/hair-products"} className='black-link hair-hover'>Hair Products</Link></li>
          <li><Link to={"/hair-tool"} className='black-link'>Hair Tools</Link></li>
          <li><Link to={"/gift-sets"} className='black-link'>Gifts & Sets</Link></li>
          <li><Link to={"/new"} className='black-link' style={{ color: 'black' }}>New</Link></li>
          <li><Link to={"/how-to"} className='black-link'>How To & Inspo</Link></li>
        </ul>
        <div className="d-flex gap-2 justify-content-end">
          <CiUser />
          <IoLocation />
        </div>
      </div>
    </>
  )
}

export default Navbar