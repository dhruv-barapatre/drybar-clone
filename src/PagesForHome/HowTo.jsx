import React from 'react'
import Footer from '../Components/Footer'

const HowTo = () => {
  return (
    <>
      <div className="how-to px-3">
        <div className="row videos">
          <div className="col-6 p-0">
            <img src="https://www.drybar.com/media//wysiwyg/full_width_promo/Mixologist_Waver.jpg" alt="" />
          </div>
          <div className="col-6 p-0 d-flex flex-column align-items-center justify-content-center">
            <h1>How To Videos</h1>
            <h6>Learn how to take your style to the next level.</h6>
            <div className="btns">
              <button className='btn1'>Watch DIY Videos</button>
              <button className='btn2'>Top Product Videos</button>
            </div>
          </div>
        </div>
        <div className="learn-now">
        <h3>Learn How</h3>
        <div className="row d-flex justify-content-evenly">
          <div className="col-3">hi</div>
          <div className="col-3">hi</div>
          <div className="col-3">hi</div>
        </div>
      </div>
      </div>
      
      <Footer />
    </>
  )
}

export default HowTo