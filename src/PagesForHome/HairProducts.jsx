import React, { useEffect, useReducer, useState } from 'react'
import { FaTruck } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { LuCoins } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../Components/Footer"

const HairProducts = () => {
    const [server, setserver] = useState([])
    // let server={}
    const fetchData = () => {
        fetch("http://localhost:3000/hair-products")
            .then(res => res.json())
            .then(data => setserver(data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchData();
        console.log(server)
    }, []);

    return (
        <div>
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
            <span className='px-3'>Hair  / Hair products</span>
            <div className="navs row px-3">
                <div className="col-2">
                    <h4>Hair Products</h4>
                    <ul>
                        <li className='m-0 p-0'>Categories</li>
                        <Link><li>All Hair Products</li></Link>
                        <Link><li>Shampoos</li></Link>
                        <Link><li>Conditioners</li></Link>
                        <Link><li>Dry Shampoo</li></Link>
                        <Link><li>Treatments & Heat Protection</li></Link>
                        <Link><li>Styling & Finishing</li></Link>
                        <Link><li>Color Care</li></Link>
                    </ul>
                </div>
                <div className="col-10">
                    <img src="https://www.drybar.com/media/wysiwyg/header_banner/LGSerum_2024_SlimHeaderBanner1_D1300x200_1.jpg" alt="" />
                    <h2 className='text-center' data-element="title">Our Hair Products</h2>
                    <div className="fetchdata">
                        <div className="row">
                            {server.map((el) => {
                                return (
                                    <div key={el.id} className='col-4 '>
                                        <div className="d-flex justify-content-center">
                                            <div className="img" style={{ width: "300px", height: "300px", backgroundImage: `url(${el.img})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                            </div>
                                            <div className="img2">
                                                <img src={el.himg} alt="" />
                                            </div>
                                        </div>
                                        <Link>
                                            <h2>{el.name}</h2>
                                            <span>
                                                <span className='text-danger mx-2'>${el.price}</span>
                                                {el.sprice ? <s>${el.sprice}</s> : ""}
                                            </span>
                                        </Link>
                                        <button className='mt-1'>Add To Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HairProducts