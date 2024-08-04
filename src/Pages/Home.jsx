import React from 'react'
import Navbar from '../Components/Navbar'
import { FaTruck } from 'react-icons/fa'
import { LuCoins } from 'react-icons/lu'
import { IoMdPhonePortrait } from 'react-icons/io'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import img4 from '../images/img4.webp'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="first-line d-flex justify-content-center gap-3 align-items-center">
        <div className="one">
          <FaTruck />
          <span>Free Shipping on all Purchases</span>
        </div>
        <div className="second">
          <LuCoins />
          <span>60 Day Return Policy</span>
        </div>
        <div className="third">
          <IoMdPhonePortrait />
          <span>Subscribe for Special Offers</span>
        </div>
      </div>
      <div className="slider">
        <Carousel className="px-2">
          <Carousel.Item>
            <div className="d-block w-100 carousel-item-custom " style={{ backgroundImage: `url(${img1})` }} alt="First slide">
              <div className="row w-100">
                <div className="col-6" style={{ left: "65%" }}>
                  <h3>GET A FREE BRAID WITH YOUR BLOWOUT</h3>
                  <p>Mon-Thurs for a limited time only</p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 carousel-item-custom" style={{ backgroundImage: `url(${img2})` }} alt="Second slide">
              <div className="row w-100">
                <div className="col-6" style={{ left: "40%" }}>
                  <h3>GET A FREE BRAID WITH YOUR BLOWOUT</h3>
                  <p>Mon-Thurs for a limited time only</p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 carousel-item-custom" style={{ backgroundImage: `url(${img3})` }} alt="Third slide">
              <div className="row w-100">
                <div className="col-6" style={{ left: "35%" }}>
                  <h3>GET A FREE BRAID WITH YOUR BLOWOUT</h3>
                  <p>Mon-Thurs for a limited time only</p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 carousel-item-custom" style={{ backgroundImage: `url(${img4})` }} alt="Fourth slide">
              <div className="row w-100">
                <div className="col-6" style={{ left: "35%" }}>
                  <h3>GET A FREE BRAID WITH YOUR BLOWOUT</h3>
                  <p>Mon-Thurs for a limited time only</p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="no-cuts row mb-5">
        <div className="art">
          <p>No Cuts. No Color. Just Blowouts!</p>
        </div>
        <div className="col-3">
          <img src="https://images.ctfassets.net/13n1l6os99jz/jI9g5BEZsgQVermc3ryjL/34ebdbdf72f8dbfe1b224739c0b7467a/Homepage_GreyBlock_BookABlowout_674x770-cropped.jpg" alt="" />
          <h3>BOOK YOUR BLOWOUT</h3>
          <p>Find your closest shop and snag your next appointment!</p>
          <button>Book Now</button>
        </div>
        <div className="col-3">
          <img src="https://images.ctfassets.net/13n1l6os99jz/4nk5uafHhhgOifOKYZJ2qg/2d01bfbf4a397b5186a1af04d5e3b960/Homepage_GreyBlock_WTF_674x770-cropped.jpg" alt="" />
          <h3>BOOK YOUR BLOWOUT</h3>
          <p>Find your closest shop and snag your next appointment!</p>
          <button>Book Now</button>
        </div>
        <div className="col-3">
          <img src="https://images.ctfassets.net/13n1l6os99jz/6eTmIeEzgtiH4QcqUCWHRL/a83baea81b00c8683018edfc524330fb/Homepage_GreyBlock_Barfly_674x770-cropped-new.jpg" alt="" />
          <h3>BOOK YOUR BLOWOUT</h3>
          <p>Find your closest shop and snag your next appointment!</p>
          <button>Book Now</button>
        </div>
      </div>
      <div className="bordar">
        <img src="https://www.drybarshops.com/assets/images/ic-heart.png" alt="" />
      </div>
      <div className="slider-mix">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>THE STYLES</h1>
              <p>See all of our blowout styles!</p>
              <button>Browse All Styles</button>
            </div>
            <div className="col-12">
            <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home