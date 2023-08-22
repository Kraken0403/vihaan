import React from 'react'
import Container from '../Container/Container'
import aboutHero from '../../Assets/Images/about.jpg'
import sample from '../../Assets/Images/sample-img.png'
import './AboutHero.scss'

function AboutHero() {
  return (
    <div className='ah'>
        <Container>
            <div className="ah__wrapper">
                <div className="ah__left">
                    <div className="line line-1">Know Your next</div>
                    <div className="line line-2">Partners</div>
                </div>
                <div className="ah__right">
                    <img src={aboutHero} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AboutHero