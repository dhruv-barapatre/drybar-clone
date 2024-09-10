import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const HowTo = () => {
  return (
    <>
      <div className="how-to px-3">
        <div className="row videos">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0">
            <img src="https://www.drybar.com/media//wysiwyg/full_width_promo/Mixologist_Waver.jpg" alt="" />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0 d-flex flex-column align-items-center justify-content-center">
            <h1>How To Videos</h1>
            <h6>Learn how to take your style to the next level.</h6>
            <div className="btns">
              <button className='btn1'>Watch DIY Videos</button>
              <button className='btn2'>Top Product Videos</button>
            </div>
          </div>
        </div>
        <div className="learn-now py-5">
          <h3>Learn How</h3>
          <div className="row d-flex justify-content-evenly">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/Videos_CurlingIron.jpg')" }}>
                <div className="icon">
                  <div className="traingle"></div>
                </div>
              </div></Link>
              <h3>Don't know what curling iron to use? We can help.</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/Videos_ExtendYourBlowout.jpg')" }}>
                <div className="icon">
                  <div className="traingle"></div>
                </div>
              </div></Link>
              <h3>Are you wondering how to make your blowout last? It's easy!</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <Link to={"https://youtu.be/iN8CJ8-siLQ?si=L5B6XpJlfPC_soeg"}><div className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('https://www.drybar.com/media/video/thumbnails/cache/c556c89eeec08fe4a77bcae83aecb356/curlroundbrush_1850.png  ')" }}>
                <div className="icon">
                  <div className="traingle"></div>
                </div>
              </div></Link>
              <h3>Want curls to last? Blow them in with a round brush and a blow-dryer.</h3>
            </div>
          </div>
        </div>
        <div className="flat-iron row d-flex flex-wrap justify-content-evenly">
          <div className="cls col-12  col-sm-8 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h3>NEW Straight Shot Blow-Drying Flat Iron</h3>
            <p>The Straight Shot Blow-Dryer Flat Iron combines the structure of a flat iron with the airflow of a blow-dryer to create a straight style with natural body and less frizz. </p>
          </div>
          <div className="clss col-12  col-sm-8 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img src="https://www.drybar.com/media/video/thumbnails/cache/312a1f8f928f1faf50ba7873f474a931/StraightShot_Thumbnails_1850x1041.jpg" alt="" />
          </div>
        </div>
        <div className="check-us my-4">
          <h3>CHECK US OUT</h3>
          <div className="row d-flex flex-wrap justify-content-evenly gy-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 text-center">
              <img src="https://www.drybar.com/media//wysiwyg/746x424_Article_Video_Cover_Images/Detox_Dry_Shampoo_1.jpg" alt="" />
              <h4 className='m-3'>ARTICLES & PRESS</h4>
              <h6>Not the Usual Blah Blah. We've curated our most requested content from the latest releases, recent awards and even some of our tried-and-true favorites.</h6>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 text-center">
              <img src="https://www.drybar.com/media//wysiwyg/746x424_Article_Video_Cover_Images/Double_Shot_1.jpg" alt="" />
              <h4 className='m-3'>INSPIRATION</h4>
              <h6>It’s not just blowouts we’re providing. It’s happiness and confidence. In fact, the single most important part of the Drybar experience is the way we make people feel.</h6>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 text-center">
              <img src="https://www.drybar.com/media//wysiwyg/746x424_Article_Video_Cover_Images/Blonde_Ale_Mask_1.jpg" alt="" />
              <h4 className='m-3'>GALLERY</h4>
              <h6>In providing beauty products to create and maintain the perfect blowout for all hair types that make everyone feel happy and confident - we stumble on some amazing images.</h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HowTo