import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Service'
import Navbar from './Components/Navbar'
import Book from './Pages/Book'
import Shop from './Pages/Shop'
import Allroutes from './Routes/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      {/* <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <Shop />
        </div>
        <div className="tab-pane fade " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <Home />
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <Book />
        </div>
      </div> */}
      <Allroutes /> 
    </>
  )
}

export default App
