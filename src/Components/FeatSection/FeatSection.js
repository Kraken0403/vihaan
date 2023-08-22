import React from 'react'
import Cta from '../CTA/Cta'
import './FeatSection.scss'
import sample from '../../Assets/Images/sample.png'
import image1 from '../../Assets/Home/fem1.png'
import image2 from '../../Assets/Home/fem2.png'
import image3 from '../../Assets/Home/fem3.png'

function FeatSection() {

  return (
    <div className='feat-section'>
        <div className="feat-section__wrapper">
            <div className="image1"><img src={image3} alt="" /></div>
            <div className="image2"><img src={image1} alt="" /></div>
            <div className="image3"><img src={image1} alt="" /></div>
            <div className="image4"><img src={image2} alt="" /></div>
            <div className="feat-section__wrapper__content">
                <p>As Seen in</p>
                <h2>Gujarati Film:<br/>XYZ</h2>
                <div  style={{width: 'fit-content', margin: 'auto'}}>
                  <Cta ctaText="Watch Video"/>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default FeatSection