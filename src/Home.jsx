import React from 'react'
import Navbar from './Components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Hi</div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    
                </div>
            </div>
        </>
    )
}

export default Home
