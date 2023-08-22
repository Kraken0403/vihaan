import React from 'react'
import './Circle.scss'
import CircleImg from '../../Assets/Images/Marquee Circle Picture.png'
import rings from '../../Assets/Images/rings.png'

function Circle() {
  return (
    <div className="circle">
    
        <div className="circle-img__wrapper">
            <img src={CircleImg} alt="" />
        </div>
        <div className="rings__wrapper">
            <img src={rings} alt="" />
        </div>
 
    </div>
  )
}

export default Circle