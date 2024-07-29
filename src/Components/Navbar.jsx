import React from 'react'
import Home from '../Home'


const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 col-12">
                            <ul className="nav nav-pills mb-3 align-items-center justify-content-center justify-content-md-start" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Service</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Book</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active last" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Shop</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12 text-center text-md-end">
                            <div className="icons">
                                <i className="bi bi-person"></i>
                                <i className="bi bi-search"></i>
                                <i className="bi bi-geo-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <img src="https://www.drybarshops.com/assets/images/logoSmall.svg" alt="Logo" />
            </div>
        </>
    )
}

export default Navbar
