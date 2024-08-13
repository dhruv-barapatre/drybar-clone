import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
                        <div className="fetchdata">
                            {data.map((el) => {
                               return <h1> {el.id} </h1>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gift