import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Hairtool = () => {
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
                    <img className='w-100 my-3' src="https://www.drybar.com/media/wysiwyg/header_banner/RollerClub_SlimHeaderBanner_D1300x200.jpg" alt="" />
                    <div className="no-more">
                        <div className="row d-flex align-items-center" >
                            <div className="col-6 p-3" >
                                <h2 className="text-center" style={{ fontSize: "45px" }}>
                                    No More Hotel Hair-Dryers!
                                </h2>
                                <p style={{ fontSize: "25px", textAlign: "center" }}>Plump it up with Big Swig Thickening Spray - your way to get thicker, fuller-looking and soft, touchable hair!</p>
                                <p className='text-center'>The ultimate travel dryer delivers 100% of the performance of most full-sized dryers!.</p>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-6 p-0">
                                <img src="https://www.drybar.com/media//wysiwyg/definition_widget/BabyButtercupTravelBlowDryer.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row d-flex align-items-center" >
                            <div className="col-6 p-0">
                                <img src="https://www.drybar.com/media//wysiwyg/definition_widget/StraightShot_2022_DefinitionWidget3_D664x688.jpg" alt="" />
                            </div>
                            <div className="col-6 p-3" >
                                <h2 className="text-center" style={{ fontSize: "45px" }}>Straighten With Innovation</h2>
                                <p style={{ fontSize: "25px", textAlign: "center" }}>Plump it up with Big Swig Thickening Spray - your way to get thicker, fuller-looking and soft, touchable hair!</p>
                                <h4 className='text-center'>The Straight Shot Blow-Dryer Flat Iron combines the structure of a flat iron with the airflow of a blow-dryer to create a straight style with natural body and less frizz.</h4>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="learn my-4">
                        <h1 className='text-center'>Learn Something New</h1>
                        <div className="row text-center">
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/746x424_Article_Video_Cover_Images/Lemon_Bar_1.jpg" alt="" />
                                <h4>Which Hair Brush Should You Use?</h4>
                                <p>Alli Webb, founder of Drybar, advises how to choose the right Drybar brush for your hair. Still not sure what brush to buy? Buy them all in a special value set!</p>
                                <Link>Watch Now</Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/746x424_Article_Video_Cover_Images/Lemon_Bar_1.jpg" alt="" />
                                <h4>Which Hair Brush Should You Use?</h4>
                                <p>Alli Webb, founder of Drybar, advises how to choose the right Drybar brush for your hair. Still not sure what brush to buy? Buy them all in a special value set!</p>
                                <Link>Watch Now</Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/746x424_Article_Video_Cover_Images/Lemon_Bar_1.jpg" alt="" />
                                <h4>Which Hair Brush Should You Use?</h4>
                                <p>Alli Webb, founder of Drybar, advises how to choose the right Drybar brush for your hair. Still not sure what brush to buy? Buy them all in a special value set!</p>
                                <Link>Watch Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="meet my-5">
                        <div className="row d-flex align-items-center" style={{ backgroundColor: "#FFEA7D" }}>
                            <div className="col-6 p-0">
                                <img src="https://www.drybar.com/media//wysiwyg/definition_widget/CurlParty_DefinitionWidget3UPDATE_D664x688.jpg" alt="" />
                            </div>
                            <div className="col-6 p-3" >
                                <h2 className="text-center" style={{ fontSize: "45px" }}>Meet the Curl Crew</h2>
                                <p className='text-center'>Want the perfect curls? Find your fave in our curling iron collection!</p>
                                <button style={{ backgroundColor: "#57575A", border: "none", color: "white", padding: "7px 40px", display: "block", margin: "auto" }}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="curling my-5">
                        <h3>Curling Iron Collection</h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/t/h/the3daybenderrotatingcurlingiron1_1.jpg" alt="" />
                                <p>The 3-Day Bender Rotating Curling Iron</p>
                                <span>$149.00</span>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-3">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/t/h/the3daybenderrotatingcurlingiron1_1.jpg" alt="" />
                                <p>The 3-Day Bender Rotating Curling Iron</p>
                                <span>$149.00</span>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-3">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/t/h/the3daybenderrotatingcurlingiron1_1.jpg" alt="" />
                                <p>The 3-Day Bender Rotating Curling Iron</p>
                                <span>$149.00</span>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-3">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/t/h/the3daybenderrotatingcurlingiron1_1.jpg" alt="" />
                                <p>The 3-Day Bender Rotating Curling Iron</p>
                                <span>$149.00</span>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center" style={{ backgroundColor: "#F9F9F9" }}>
                        <div className="col-6 p-3" >
                            <h2 className="text-center" style={{ fontSize: "45px" }}>Level Up For Luxe</h2>
                            <p className='text-center'>Take your blowouts to the next level! Our Reserve Collection is the perfect way to elevate your styling at home!</p>
                            <button style={{ backgroundColor: "#57575A", border: "none", color: "white", padding: "7px 40px", display: "block", margin: "auto" }}>Shop Now</button>
                        </div>
                        <div className="col-6 p-0">
                            <img src="https://www.drybar.com/media//wysiwyg/definition_widget/DualPlate_2023_DefinitionWidget4_D664x688.jpg" alt="" />
                        </div>
                    </div>
                    <div className="top-watch my-5 row">
                        <h3 className='text-center'>Top Watch - How To Style</h3>
                        <div className="col-4">
                            <img src="https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/Videos_Bangs.jpg" alt="" />
                            <h3 className='text-center mt-1'>How to Style Bangs</h3>
                        </div>
                        <div className="col-4">
                            <img src="https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/curlflatiron_1850.png" alt="" />
                            <h3 className='text-center mt-1'>How to Style Bangs</h3>
                        </div>
                        <div className="col-4">
                            <img src="https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/curlroundbrush_1850.png" alt="" />
                            <h3 className='text-center mt-1'>How to Style Bangs</h3>
                        </div>
                    </div>
                    <div className="expolre-dry-bar">
                        <h3>Explore drybar hair tools</h3>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/promo_grid/Accessories_430x430.jpg" alt="" />
                                <Link><h3>Accesories</h3></Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/promo_grid/BlowDryers_430x430.jpg" alt="" />
                                <Link><h3>Blow-Dryers</h3></Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid2_Desktop.jpg" alt="" />
                                <Link><h3>Brushes</h3></Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/promo_grid/CurlingIrons_430x430.jpg" alt="" />
                                <Link><h3>Curling Irons</h3></Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/promo_grid/StraighteningTools_430x430.jpg" alt="" />
                                <Link><h3>Straightening Tools</h3></Link>
                            </div>
                            <div className="col-4">
                                <img src="https://www.drybar.com/media//wysiwyg/promo_grid/AllTools_430x430.jpg" alt="" />
                                <Link><h3>All Tools</h3></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Hairtool