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
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
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
                <div className="col-6 col-12" style={{ left: "65%" }}>
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
                <div className="col-6 col-12" style={{ left: "40%" }}>
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
                <div className="col-6 col-12" style={{ left: "35%" }}>
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
                <div className="col-6 col-12" style={{ left: "35%" }}>
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
        <div className="col-9 divs">
          <img src="https://images.ctfassets.net/13n1l6os99jz/jI9g5BEZsgQVermc3ryjL/34ebdbdf72f8dbfe1b224739c0b7467a/Homepage_GreyBlock_BookABlowout_674x770-cropped.jpg" alt="" />
          <h3>BOOK YOUR BLOWOUT</h3>
          <p>Find your closest shop and snag your next appointment!</p>
          <button>Book Now</button>
        </div>
        <div className="col-9 divs">
          <img src="https://images.ctfassets.net/13n1l6os99jz/4nk5uafHhhgOifOKYZJ2qg/2d01bfbf4a397b5186a1af04d5e3b960/Homepage_GreyBlock_WTF_674x770-cropped.jpg" alt="" />
          <h3>BOOK YOUR BLOWOUT</h3>
          <p>Find your closest shop and snag your next appointment!</p>
          <button>Book Now</button>
        </div>
        <div className="col-9 divs">
          <img src="https://images.ctfassets.net/13n1l6os99jz/6eTmIeEzgtiH4QcqUCWHRL/a83baea81b00c8683018edfc524330fb/Homepage_GreyBlock_Barfly_674x770-cropped-new.jpg" alt="" />
          <h3>BOOK YOUR BLOWOUT</h3>
          <p>Find your closest shop and snag your next appointment!</p>
          <button>Book Now</button>
        </div>
      </div>
      {/*<div className="bordar">
        <img src="https://www.drybarshops.com/assets/images/ic-heart.png" alt="" />
      </div>
      <div className="slider-mix p-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <h1>THE STYLES</h1>
              <p>See all of our blowout styles!</p>
              <button>Browse All Styles</button>
            </div>
            <div className="col-8">
              <Carousel>
                <Carousel.Item>
                  <div className="d-flex flex-wrap justify-content-center py-2">
                    <img src="https://images.ctfassets.net/13n1l6os99jz/6eV3WWIcpWHBP6cnJuqBhT/ebfe2a134357b85549cf23be67d8928d/Services_Manhattan4_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/7rXPof9zF7obJIrCWSVLCH/9a4c3097f85a70ba36c165b2f06103e3/Services_Straight_Up1_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/J0NosS6UOOcAZHRJfhw9H/1469613373c07e15be319474bb830c1d/Services_Mai-Tai8_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/1bktyekV3PyUlmzuVGKRjk/b83fa88368a75ed36e743253b0b737e7/Services_Cosmo1_822x822__1_.jpg" alt="" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex flex-wrap justify-content-center py-2">
                    <img src="https://images.ctfassets.net/13n1l6os99jz/2TSD9cVMDfnpxBVfr1DLBC/adaaf84dd18c62082e684e4c385a8801/Services_Cosmo-Tai3_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/5ls76VxiKdO1VGwFv1MJ6s/991757a3be298fccb2262ab8c9805898/Services_Dirty-Martini5_822x822__1_.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/2FXlJ8UgHf3gywAS7F6nJa/072d798125dee0f88ce1d7415af63e34/Services_Southern_Comfort9_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/7ax2ZW7jJgrijHIPibPJzj/ce6d508f44008fd07d989fa997d88cfb/Services_Old_Fashioned4_822x822.jpg" alt="" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex flex-wrap justify-content-center py-2">
                    <img src="https://images.ctfassets.net/13n1l6os99jz/732uXasoZxqurZCm7Lz7YU/0edcc5d0f7412e59d4333d397bd3e2c5/Services_Shirley_Temple2_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/5BkOuJab0GpNEVfr7qfMud/b3b18b52e0de0548b4b427a59b76312d/Services_Braids5_822x822.jpg" alt="" />
                    <img src="https://images.ctfassets.net/13n1l6os99jz/iUFfPDCoVeCYQRYB69xrL/5afbf416e50553c0cb478910c1f0682e/Services_Uptini4_822x822.jpg" alt="" />

                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="pemplate">
        <div className="container-fluid p-0">
          <div className="row m-auto p-5">
            <div className="col-4 first">
              <Link><img src="https://images.ctfassets.net/13n1l6os99jz/4xpKSENLx1aebUOPtuKexK/c54324a98ed306ce30d939f54fb25440/Homepage_Trifold_Franchising_Desktop.jpg?fm=webp" alt="" /></Link>
            </div>
            <div className="col-4 second">
              <Link><img src="https://images.ctfassets.net/13n1l6os99jz/4GQW3aCvZKqpBdJphKrC0J/3d9d23500fe034a9d0a80d503390cb59/Homepage_Trifold_Locations_Desktop.jpg?fm=webp" alt="" /></Link>
            </div>
            <div className="col-4 third">
              <Link><img src="https://images.ctfassets.net/13n1l6os99jz/2qu5IZJObeWDnH4LtDU8G0/9f93286b3a5ad77d93c4f26b5ab78e59/Homepage_Trifold_NewBars_Desktop.jpg?fm=webp" alt="" /></Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home