import React from 'react'
import Navbar from '../Components/Navbar'
import { FaFacebookF, FaPinterestP, FaTruck, FaTwitter } from 'react-icons/fa'
import { LuCoins } from 'react-icons/lu'
import { IoMdPhonePortrait } from 'react-icons/io'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import img4 from '../images/img4.webp'
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5'

const Footer = () => {
    return (
        <>
            <div className="icons my-5 d-flex align-items-center d-flex justify-content-center">
                <div className="col-5">
                <img src="https://www.drybarshops.com/assets/images/footer/Keep_Glowing_Grey.png" alt="" />
                </div>
                <div className="line"></div>
                <div className="icons-bar col-4 d-flex flex-wrap justify-content-center">
                    <img src="https://www.drybarshops.com/assets/images/footer/Drybar_Logo_Grey_138x66.png" alt="" />
                    <img src="https://www.drybarshops.com/assets/images/footer/AmazingLashStudio_Logo_Grey_138x66.png" alt="" />
                    <img src="https://www.drybarshops.com/assets/images/footer/RadiantWaxing_Logo_Grey_138x66.png" alt="" />
                    <img src="https://www.drybarshops.com/assets/images/footer/ElementsMassage_Logo_Grey_138x66.png" alt="" />
                    <img src="https://www.drybarshops.com/assets/images/footer/FitnessTogether_Logo_Grey_138x66.png" alt="" />
                </div>
            </div>
            <div className="support d-flex justify-content-center gap-1">
                <div className="col-2">
                    <p>Cutomer Support</p>
                    <div className="line"></div>
                    <div className="links">
                        <Link>Contact Us</Link>
                        <Link>Find A DryBar Location</Link>
                    </div>
                </div>
                <div className="col-2">
                    <p>Cutomer Support</p>
                    <div className="line"></div>
                    <div className="links">
                        <Link>Help & FaQ</Link>
                        <Link>Cancellation Policy</Link>
                        <Link>Membership Policy</Link>
                    </div>
                </div>
                <div className="col-2">
                    <p>Help & Info</p>
                    <div className="line"></div>
                    <div className="links">
                        <Link>Our Story</Link>
                        <Link>JOIN THE TEAM</Link>
                        <Link>PRESS & INQUIRIES</Link>
                    </div>
                </div>
                <div className="col-2">
                    <p>About</p>
                    <div className="line"></div>
                    <div className="links">
                        <Link>Gift Card</Link>
                    </div>
                </div>
                <div className="col-3">
                    <h5>See What's Tap!</h5>
                    <p>Get on the list and be the first to hear about all things Drybar! Plus, get $10 off your first blowout just for signing up!</p>
                    <input type="text" />
                    <button>JOIN</button>
                </div>
            </div>
            <div className="footer">
                <div className="row row1 justify-content-between">
                    <div className="col-4">
                        <img src="https://www.drybarshops.com/assets/images/drybarFooterIcon1.png" alt="" />
                        <p className='m-0'>Drybar BOOKING APP</p>
                        <img src="https://www.drybarshops.com/assets/images/downloadAppStore.svg" alt="" />
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <p className='m-0'>Let's Be Friends!</p>
                        <FaFacebookF />
                        <IoLogoInstagram />
                        <FaTwitter />
                        <FaPinterestP />
                        <IoLogoYoutube />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>©2022 DB Franchise, LLC. Each Drybar® shop is independently owned and operated. Drybar® is a registered trademark owned by Helen of Troy Limited and used by DB Franchise, LLC under license.</p>
                <div className="d-flex flex-column">
                    <Link><p>Do Not Sell My Personal Information</p></Link>
                    <Link><p>California Privacy Rights</p></Link>
                </div>
                <div className="d-flex flex-column">
                    <Link><p>Accesiblity Policy</p></Link>
                    <Link><p>Privacy & Security</p></Link>
                    <Link><p>Terms Of Service</p></Link>
                </div>
            </div>
        </>
    )
}

export default Footer