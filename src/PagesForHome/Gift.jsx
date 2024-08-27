import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


const Gift = () => {
    const [data, setdata] = useState([])
    const fetchdata = () => {
        fetch('http://localhost:3000/gift')
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
            .catch(err => console.log(err))
        // console.log(data)
    }
    // fetchdata()
    useEffect(() => {
        fetchdata()

    }, [])
    return (
        <>
            <div className="navs gift">
                <div className="row">
                    <div className="col-2">
                    <span className='px-3'>Hair  / Gift & Sets</span>
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
                        <h4 className='text-center'>SHOP KITS AND SETS</h4>
                        <div className="d-flex justify-content-between">
                            <span>SHOP KITS AND SETS</span>
                            <select style={{ fontWeight: "700" }} id="sorter" data-role="sorter" className="sorter-options video-sorter-options" aria-label="Sort By">
                                <option value="position">
                                    Sort:                                 Position            </option>
                                <option value="bestsellers">
                                    Best Sellers            </option>
                                <option value="revenue">
                                    Revenue            </option>
                                <option value="most_viewed">
                                    Most Viewed            </option>
                                <option value="new">
                                    New            </option>
                                <option value="price_asc">
                                    Price: low to high            </option>
                                <option value="price_desc">
                                    Price: high to low            </option>
                                <option value="name">
                                    Product Name            </option>
                                <option value="rating_summary">
                                    Top Rated            </option>
                            </select>
                        </div>
                        <div className="fetchdata my-5">
                            <div className="row">
                                {data.map((el) => {
                                    const discountPercentage = Math.round(((el.sprice - el.price) / el.sprice) * 100);

                                    console.log(discountPercentage)
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
                </div>
            </div>
        </>
    )
}

export default Gift