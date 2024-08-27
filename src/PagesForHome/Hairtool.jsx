import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Hairtool = () => {
    const [data,setdata]=useState([])
    const fetchdata = () => {
        fetch('http://localhost:3000/hair-tool')
            .then(res => res.json())
            .then(data => setdata(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
            <div className="navs tool row mt-5">
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
                    <div className="fetchdata">
                        <div className="row">
                            {data.map((el) => {
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

        </>
    )
}

export default Hairtool