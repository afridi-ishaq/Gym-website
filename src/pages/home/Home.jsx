import React from 'react'
import './home.css'
import gymImage from '../../assets/gymImage.png'
import { div } from 'framer-motion/client'

const Home = () => {
  return (
    <div>
      <div className='gymImage'>
        <img src={gymImage} alt="Gym"  />
      </div>
      <div className= "homeText">
        <h1>SCULPT  <span>YOUR</span>  BODY,<br/> ELVETE  <span>YOUR</span>  SPIRIT</h1>
      </div>
    </div>
  )
}

export default Home
