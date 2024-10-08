import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Loading from './Loading'

const Hairtool = () => {
    const [data, setdata] = useState([])
    const [server, setserver] = useState([])
    const [page, setpage] = useState(1)
    const [loading,setloading]=useState(true)
    let limit = 6;
    const fetchdata = () => {
        fetch(`https://drybar-backside.onrender.com/hair-tool?_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
                setserver(data)
                setloading(false)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchdata()
    }, [page])
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
    const handleCart = (el) => {
        fetch("https://drybar-backside.onrender.com/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(el)
        })
            .then(res => res.json())
            .then(data => {
                alert("Item Added To Cart")
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>
            <div className="navs tool row mt-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                    <span className='px-3 '>Hair  / Hair Tool</span>
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
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10">
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className='d-inline' data-element="title">Our Hair Tool</h2>
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
                        <div className="row d-flex flex-wrap justify-content-center">
                            {loading ?<Loading />:server.map((el) => {
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
                                        <button className='mt-1' onClick={() => handleCart(el)}>Add To Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="pagination d-flex justify-content-center gap-5 m-5">
                        <button onClick={() => setpage(page - 1)} disabled={page == 1}><GrFormPrevious /></button>
                        <button onClick={() => setpage(page + 1)} disabled={page == 6}><GrFormNext /></button>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Hairtool