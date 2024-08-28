import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


const Gift = () => {
    const [data, setdata] = useState([])
    const [server,setserver]=useState([])
    const fetchdata = () => {
        fetch('http://localhost:3000/gift')
            .then(res => res.json())
            .then(data => {
                setdata(data)
                setserver(data)
            })
            .catch(err => console.log(err))
        // console.log(data)
    }
    // fetchdata()
    useEffect(() => {
        fetchdata()

    }, [])
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
                        <div className="fetchdata my-5">
                            <div className="row">
                                {server.map((el) => {
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
                </div>
            </div>
        </>
    )
}

export default Gift