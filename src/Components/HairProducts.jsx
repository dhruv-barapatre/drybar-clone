import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { LuCoins } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

const HairProducts = () => {
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
                    <h2 className='text-center' data-element="title">Learn Something New</h2>
                    <div className="row">
                        <div className="col-4">
                            <Link>
                                <img src="https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/SmoothShot_Thumbnails_1850x1041.jpg" alt="" />
                                <h4 className='text-center'>The Smooth Shot Paddle Brush Blow-Dryer</h4>
                                <p>Paddle Your Way to Smooth. Combines the hot air of a blow-dryer with the structure of a paddle brush to create a smooth blowout with added body in one simple step. Great for detangling, taming frizz, and creating a shiny blowout.</p>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link>
                                <img src="https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/DetoxCollection_1850x1041.jpg" alt="" />
                                <h4 className='text-center'>Which Detox Dry Shampoo is Right For You?</h4>
                                <p>Drybar founder Alli Webb helps determine which of the three Detox Dry Shampoos is right for you.</p>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link>
                                <img src="https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/BigBrew_Thumbnails_1850x1041.jpg" alt="" />
                                <h4 className='text-center'>Big Brew Instant Thickening Styling Treatment</h4>
                                <p>Instant thickening treatment provides fuller, denser-looking hair while locking in style. Helps rejuvenate follicles to visibly improve thickness and reduce signs of thinning hair over time.</p>
                            </Link>
                        </div>
                    </div>
                    <div className="boximg my-3">
                        <div className="row">
                            <div className="col-6 p-0 first">
                                <h1>SURE TO SHINE</h1>
                                <p>Shop the new additions to our Liquid Glass Collection!</p>
                                <button className='mt-5'>Shop Now</button>
                            </div>
                            <div className="col-6 p-0 second">
                                <img src="https://www.drybar.com/media//wysiwyg/definition_widget/LGCream_2024_DefinitionWidget3_D900x540.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slider">
                        <h2>Frizz-Fighting Sheen Team</h2>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglasssmoothingshampoo_1_1.jpg" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://www.drybar.com/media/catalog/product/cache/a66279ce311813e85621610526cb5d87/l/i/liquidglass_flatlay-1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HairProducts