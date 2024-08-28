import React, { useEffect, useReducer, useState } from 'react'
import { FaTruck } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { LuCoins } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../Components/Footer"

const HairProducts = () => {
    const [server, setserver] = useState([])
    const [data, setdata] = useState([])
    // let server={}
    const fetchData = () => {
        fetch("http://localhost:3000/hair-products")
            .then(res => res.json())
            .then(data => {
                setserver(data)
                setdata(data)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchData();
        console.log(server)
    }, []);

    let sortedData = []
    const handlefilter = (e) => {
        const value = e.target.value;
        let filterdata;
        value === "" ? filterdata = [...data]
            : filterdata = [...server].sort((a, b) => {
                if (value === 'priceAsc') {
                    return a.price - b.price;
                } else if (value === 'priceDesc') {
                    return b.price - a.price;
                } else if (value === 'nameAsc') {
                    return a.heading.localeCompare(b.heading);
                } else if (value === 'nameDesc') {
                    return b.heading.localeCompare(a.heading);
                } else if (value === 'discountAsc') {
                    a = Math.round(((a.sprice - a.price) / a.sprice) * 100);
                    b = Math.round(((b.sprice - b.price) / b.sprice) * 100);
                    return a - b;
                } else if (value === 'discountDesc') {
                    a = Math.round(((a.sprice - a.price) / a.sprice) * 100);
                    b = Math.round(((b.sprice - b.price) / b.sprice) * 100);
                    return b - a;
                } else if (value === '') {
                    return [...data];
                }
            });
        setserver(filterdata);
    };


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
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className='d-inline' data-element="title">Our Hair Products</h2>
                        <select onChange={(e) => handlefilter(e)} style={{ fontWeight: "700" }} id="sorter" data-role="sorter" className="sorter-options video-sorter-options" aria-label="Sort By">
                            <option value="">----</option>
                            <option value="priceAsc">Price: low to high</option>
                            <option value="priceDesc">Price: high to low</option>
                            <option value="nameAsc">Product Name(A To Z)</option>
                            <option value="nameDesc">Product Name(Z To A)</option>
                            <option value="discountAsc">Discount(Low To high)</option>
                            <option value="discountDesc">Discount(High To Low)</option>
                        </select>
                    </div>
                    <div className="fetchdata">
                        <div className="row">
                            {server.map((el) => {
                                const discountPercentage = Math.round(((el.sprice - el.price) / el.sprice) * 100);
                                return (
                                    <div key={el.id} className='col-4 '>
                                        <div className="d-flex justify-content-center">
                                            <div className="img" style={{ width: "300px", height: "300px", backgroundImage: `url(${el.img})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                                {discountPercentage > 0 && discountPercentage < 100 ? <span className=''>{discountPercentage}% OFF</span> : ""}
                                            </div>
                                            <div className="img2">
                                                <img src={el.himg} alt="" />
                                            </div>
                                        </div>
                                        <Link>
                                            <h2>{el.heading}</h2>
                                            <span>
                                                <span className='text-danger mx-2'>${el.price}</span>
                                                {el.sprice ? el.sprice != el.price ? <s>${el.sprice}</s> : "" : ""}
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