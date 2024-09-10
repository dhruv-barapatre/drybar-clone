import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Newpage = () => {
    const [newdata, setdata] = useState([])
    const fetchdata = () => {
        fetch("http://localhost:3000/new")
            .then(res => res.json())
            .then(data => {
                setdata(data)
                // console.log(newdata)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchdata()
    })
    return (
        <>
            <div className='px-3'>
                <span className='my-5'>Drybar / New</span>
                <div className="new-twist my-3">
                    <div className="row">
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img src="https://www.drybar.com/media//wysiwyg/definition_widget/SparklingSoda_2024_DefinitionWidget1_D900x540.jpg" alt="" />
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text text-center">
                            <h1>A New Twist On Our Shine Mist</h1>
                            <p><span>NEW</span> and improved Sparkling Soda Shine Mist & UV Shield!</p>
                            <button className='mb-3'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="smooth new-twist my-3">
                    <div className="row">
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text text-center p-3" style={{ backgroundColor: "#9EC5E8" }}>
                            <h1 style={{ color: "#575757" }}>72 Hours of Smooth</h1>
                            <p>Our <span>NEW</span> Liquid Glass High-Gloss Smoothing Blowout Cream creates a silker, more polished blowout that lasts for 72 hour!Clinically tested for claims.</p>
                            <button >Shop Now</button>
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img src="https://www.drybar.com/media//wysiwyg/definition_widget/LGCream_2024_DefinitionWidget1_D900x540.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="smooth new-twist my-3">
                    <div className="row">
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img src="https://www.drybar.com/media//wysiwyg/definition_widget/LGSerum_2024_DefinitionWidget2_D900x540.jpg" alt="" />
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text text-center p-3" style={{ backgroundColor: "#D3E8FF" }}>
                            <h1 style={{ color: "#6d8cc0" }}>Peak Sleek</h1>
                            <p>Our <span>NEW</span> Liquid Glass High-Gloss Smoothing Blowout Cream creates a silker, more polished blowout that lasts for 72 hour!Clinically tested for claims.</p>
                            <button className='mt-3'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="smooth new-twist my-3">
                    <div className="row">
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text text-center p-3" style={{ backgroundColor: "#FDEC9C" }}>
                            <h1 style={{ color: "#575757" }}>Bring On The Bouncy Blowout</h1>
                            <p>Our <span>NEW</span> Liquid Glass High-Gloss Smoothing Blowout Cream creates a silker, more polished blowout that lasts for 72 hour!Clinically tested for claims.</p>
                            <button className='mt-4'>Shop Now</button>
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img src="https://www.drybar.com/media//wysiwyg/definition_widget/RollerClub_DefinitionWidget_D900x540_1_.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="new-video">
                    <h2 className='text-center'>New Videos</h2>
                    <div className="row d-flex flex-wrap justify-content-evenly">
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center">
                            <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ overflow:"hidden",backgroundImage: "url('https://www.drybar.com/media//wysiwyg/video_thumbnails/LGFinishingSerum_Thumbnail_1850x1041.jpg')" }}>
                                <div className="icon">
                                    <div className="traingle"></div>
                                </div>
                            </div></Link>
                            <h3>Liquid Glass High-Gloss Finishing Serum</h3>
                            <p>Liquid Glass High-Gloss Finishing Serum</p>
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center">
                            <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media//wysiwyg/video_thumbnails/LGFinishingSerum_Thumbnail_1850x1041.jpg')" }}>
                                <div className="icon">
                                    <div className="traingle"></div>
                                </div>
                            </div></Link>
                            <h3>Liquid Glass High-Gloss Finishing Serum</h3>
                            <p>Liquid Glass High-Gloss Finishing Serum</p>
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center">
                            <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media//wysiwyg/video_thumbnails/LGFinishingSerum_Thumbnail_1850x1041.jpg')" }}>
                                <div className="icon">
                                    <div className="traingle"></div>
                                </div>
                            </div></Link>
                            <h3>Liquid Glass High-Gloss Finishing Serum</h3>
                            <p>Liquid Glass High-Gloss Finishing Serum</p>
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center">
                            <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media//wysiwyg/video_thumbnails/LGFinishingSerum_Thumbnail_1850x1041.jpg')" }}>
                                <div className="icon">
                                    <div className="traingle"></div>
                                </div>
                            </div></Link>
                            <h3>Liquid Glass High-Gloss Finishing Serum</h3>
                            <p>Liquid Glass High-Gloss Finishing Serum</p>
                        </div>
                        <div className="coles col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center">
                            <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media//wysiwyg/video_thumbnails/LGFinishingSerum_Thumbnail_1850x1041.jpg')" }}>
                                <div className="icon">
                                    <div className="traingle"></div>
                                </div>
                            </div></Link>
                            <h3>Liquid Glass High-Gloss Finishing Serum</h3>
                            <p>Liquid Glass High-Gloss Finishing Serum</p>
                        </div>
                    </div>
                </div>
                <div className="dry-bigger my-3">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img src="https://www.drybar.com/media//wysiwyg/cms_widget_desktop_664x428/SeltzerSpritzer_RumPunch_CMSWidget_664x428.jpg" alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 bg-light p-5 d-flex flex-column align-items-center justify-content-center">
                            <h3 className='mb-3'>Drybar is Bigger than Blowouts</h3>
                            <p>It’s not just blowouts we’re providing. It’s happiness and confidence.In fact, the single most important part of the Drybar experience is the way we make people feel. All people – our customers, our teams, our communities. Across all hair types, races, ages, gender identities, sexual orientations or religions. And to do that, we embrace our brand amassadors who bring Drybar to life in so many ways.Join in<h6 className="text-dark">#DIYDrybar</h6></p>
                            <Link className='text-dark'>LEARN MORE</Link>
                        </div>
                    </div>
                </div>
                <div className="dry-bigger my-3">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 bg-light p-5 d-flex flex-column align-items-center justify-content-center">
                            <h3 className='mb-3'>Drybar is Bigger than Blowouts</h3>
                            <p>It’s not just blowouts we’re providing. It’s happiness and confidence.In fact, the single most important part of the Drybar experience is the way we make people feel. All people – our customers, our teams, our communities. Across all hair types, races, ages, gender identities, sexual orientations or religions. And to do that, we embrace our brand amassadors who bring Drybar to life in so many ways.Join in<h6 className="text-dark">#DIYDrybar</h6></p>
                            <Link className='text-dark'>LEARN MORE</Link>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img src="https://www.drybar.com/media//wysiwyg/cms_widget_desktop_664x428/RollerClub_CMSWidget_664x428.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Newpage