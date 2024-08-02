import React from 'react'
import { IoLocation } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="navbarr">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <ul class="nav nav-pills " id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Services</button>
              </li><div className="line"></div>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Book</button>
              </li><div className="line"></div>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Shop</button>
              </li>
            </ul>

          </div>
          <div className="col-6 d-flex gap-2 justify-content-end">
            <CiSearch />
            <CiUser />
            <IoLocation />
          </div>
        </div>
      </div>
        <div className="d-flex pt-2 pb-2 d-b justify-content-center img position-relative">
          <img className='pt-1' src="https://www.drybar.com/static/version1721809573/frontend/Hot/default/en_US/images/logo.svg" alt="" />
          <img className='img-2' src="https://www.drybar.com/static/version1721809573/frontend/Hot/default/en_US/images/logo-animation.svg" alt="" />
        </div>
    </>
  )
}

export default Navbar