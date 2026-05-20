import React from 'react'
import './home.css'
import gymImage from '../../assets/gymImage.png'
import { div } from 'framer-motion/client'

const Home = () => {
  return (
    <div className='home'>
      <div className='gymImage'>
        <img src={gymImage} alt="Gym"  />
      </div>
      <div className= "homeText">
        <h1>SCULPT  <span>YOUR</span>  BODY,<br/> ELVETE  <span>YOUR</span>  SPIRIT</h1>
        <div className='sideText'>
          <h4><span>P</span><span>R</span><span>E</span><span>V</span></h4>
          <h4><span>N</span><span>E</span><span>X</span><span>T</span></h4>
        </div>
        <div>
          <div className='InfoText'>
            <h2>Hello this is Ishaq Afridi's Gym You build your Body Here and Build Your stamina.</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
