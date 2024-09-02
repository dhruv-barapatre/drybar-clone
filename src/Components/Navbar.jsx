import React, { useEffect, useState } from 'react'
import { IoLocation } from "react-icons/io5";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdDelete, MdRemoveShoppingCart } from 'react-icons/md';
import img from '../images/empty-cart.png'

const Navbar = () => {
  const [data, Setdata] = useState([])
  const [cart, setcart] = useState(0)
  const [sum, setsum] = useState(0)
  const GetData = () => {
    axios.get("http://localhost:3000/cart")
      .then(res => {
        Setdata(res.data)
        TotalCost(res.data)
        Checkcart(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const delData = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(res => {
        alert("Item Delted Succesfully")
        GetData()
      })
      .catch(err => {
        alert("Something Went Wrong.....")
        console.log(err)
      })
  }
  const TotalCost = (t) => {
    let Sumdata = 0
    for (let i = 0; i < t.length; i++) {
      Sumdata += Number(t[i].price)
    }
    setsum(Sumdata)
  }
  useEffect(() => {
    GetData()
  }, [])

  const Checkcart = (data) => {
    data.length > 0 ? setcart(true) : setcart(false);
  }
  return (
    <>
      <div className="navber d-b d-flex justify-content-between align-items-center px-3">
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

        <div className="d-flex gap-2 justify-content-end nav-btns">
          <Link to={"/login"}><CiUser /></Link>
          <IoLocation />

          <button className="btn p-0" type="button" data-bs-toggle="offcanvas" onClick={GetData} data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><CiShoppingCart /></button>

          <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Cart Page...</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ">
              {cart ?
                data.map((el) => (
                  <div className='pros' key={el.id}>
                    <img src={el.img} alt="" />
                    <h5>{el.heading}</h5>
                    <p>${el.price}</p>
                    <button onClick={() => delData(el.id)} className='del-btn'><MdDelete />Delete</button>
                  </div>
                ))
                : (
                  <div className='d-flex align-items-center justify-content-center'>
                    <img src={img} alt="" />
                    Your Cart Is Empty
                  </div>
                )}
              <div className="lane mt-3 d-flex justify-content-center gap-3">
                <h4>Total:</h4>
                <h4>${sum}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar