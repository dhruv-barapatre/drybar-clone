import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { LuCoins } from 'react-icons/lu'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Shop = () => {
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
            <div className="img">
                <img className='py-3' style={{ width: "100%", height: "400px" }} src="https://www.drybar.com/media/wysiwyg/fullsize_banner_desktop/Hero_banner_Desktop_1920x540_opt2b_.jpg" alt="" />
            </div>
            <div className="products px-3">
                <div className="text d-flex align-items-center justify-content-between">
                    <h4>CREATE THE LOOK AT HOME WITH DRYBAR'S NEW SETS!</h4>
                    <p>1 - 4 of 4</p>
                </div>
                <div className="four">
                    <div className="row">
                        <div className="col-3">
                            <div className="img">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/u/l/ultra_sleek_svs_pdp_carousel_full_size_3600x3600.jpg" alt="" />
                            </div>
                            <h3><a href="">The Ultra Set</a></h3>
                            <span className="text-danger">$114.25</span>
                            <span clasName="span"><del>$250.35</del></span>
                            <button>Add To Bag</button>
                        </div>
                        <div className="col-3">
                            <div className="img">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/u/l/ultra_sleek_svs_pdp_carousel_full_size_3600x3600.jpg" alt="" />
                            </div>
                            <h3><a href="">The Ultra Set</a></h3>
                            <span className="text-danger">$114.25</span>
                            <span clasName="span"><del>$250.35</del></span>
                            <button>Add To Bag</button>
                        </div>
                        <div className="col-3">
                            <div className="img">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/u/l/ultra_sleek_svs_pdp_carousel_full_size_3600x3600.jpg" alt="" />
                            </div>
                            <h3><a href="">The Ultra Set</a></h3>
                            <span className="text-danger">$114.25</span>
                            <span clasName="span"><del>$250.35</del></span>
                            <button>Add To Bag</button>
                        </div>
                        <div className="col-3">
                            <div className="img">
                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/u/l/ultra_sleek_svs_pdp_carousel_full_size_3600x3600.jpg" alt="" />
                            </div>
                            <h3><a href="">The Ultra Set</a></h3>
                            <span className="text-danger">$114.25</span>
                            <span clasName="span"><del>$250.35</del></span>
                            <button>Add To Bag</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src="https://www.drybar.com/media/wysiwyg/hero_banner_D1365x439/MadeWithout_2023_SlimBanner_D1465x300_002_.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="four-img">
                <div className="row d-flex">
                    <div className="col-6">
                        <img src="https://www.drybar.com/media//wysiwyg/definition_widget/Definition_Widget_900x540_opt1.jpg" alt="" />
                    </div>
                    <div className="col-6 text-center">
                        <h1>FEELING POLYGLAMOROUS?</h1>
                        <p>That's the Drybar Way</p>
                        <button>Shop Now</button>
                    </div>
                    <div className="col-6 text-center">
                        <h1>NEXT LEVEL BLOWOUTS</h1>
                        <p>Shop our Reserve Collection to elevate your blowout look to luxury!</p>
                        <button>Shop Now</button>
                    </div>
                    <div className="col-6">
                        <img src="https://www.drybar.com/media//wysiwyg/definition_widget/ReserveCollection_DefinitionWidget_D900x540.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="discover my-5">
                <h2>Discover Drybar</h2>
                <div className="row">
                    <div className="col-4">
                        <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_Products_430x430.jpg.jpg" alt="" />
                        <Link><h3>Hair Products</h3></Link>
                    </div>
                    <div className="col-4">
                        <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_Tools_430x430.jpg_1.jpg" alt="" />
                        <Link><h3>Hair Tool & Accesories</h3></Link>
                    </div>
                    <div className="col-4">
                        <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_Benefits_430x430.jpg.jpg" alt="" />
                        <Link><h3>Benefit</h3></Link>
                    </div>
                    <div className="col-4">
                        <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_Kits_430x430.jpg.jpg" alt="" />
                        <Link><h3>Gift & Kits</h3></Link>
                    </div>
                    <div className="col-4">
                        <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_NEW_430x430.jpg_1_.jpg" alt="" />
                        <Link><h3>New</h3></Link>
                    </div>
                    <div className="col-4">
                        <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_How_to_430x430.jpg.jpg" alt="" />
                        <Link><h3>How TO</h3></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop