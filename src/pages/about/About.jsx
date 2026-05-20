import React from 'react'
import gymImage from '../../assets/gymImage.png'
import './about.css'


const About = () => {
  return (
    <div>
      <h1>HELLO EVERY ONE ARE LOOKING FOR PARACTICE</h1>
      <div className='machine-box'>
        <h1>MACHINES</h1>
        <img src={gymImage} alt="" />
        <p>Here are some of our state-of-the-art machines for your workout needs.</p>
      </div>
    </div>
  )
}

export default About
