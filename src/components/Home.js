import React from 'react'
import Glassesman from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Title from '../assets/Title.png'
import Vector from '../assets/Vector.png'
import Moon from '../assets/moon.png'
import Countdown from '../assets/Countdown.png'
import './Home.css';
export const Homepage = () => {

  return (
    <main>
      <div className='home-container'>
      <div className='head-text'>
        <h2>Igniting the Revolution in HR innovation</h2>
      </div>
      <div className='vector'><img src={Vector} alt="vector" /></div>
      <div className='title-div-cont'>
      <div className='title'>
      <div><img src={Title} alt="title" /></div>
      <h4 className='participate'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</h4>
      <button className='home-button' type="button">Register</button>
      <div className='countdown'><img src={Countdown} alt="countdown"/></div>
      </div>
      <div className='home'>
        <div className='glassesman'><img src={Glassesman} alt="glassesman" /></div>
        <div className='img-overlay'><img src={Moon} alt="moon"/></div>
      </div>
      </div>
      </div>
    </main>

  )
}
