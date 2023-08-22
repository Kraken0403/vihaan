import React from 'react'
import './HomeAbout.scss'
import Container from '../Container/Container'
import Cta from '../CTA/Cta'
import homeabimage from '../../Assets/Home/curvedha.png'
import sample from '../../Assets/Images/sample-img.png'


function HomeAbout(props) {
  return (
    <div className="home-about">
        <Container>
            <div className="home-about__wrapper">
                <div className="home-about__image__wrapper">
                    <div className="home-about__image">
                        <img src={sample} alt="" />
                    </div>
                </div>
                
                <div className="home-about__wrapper__head">
                    <div className="line line-1">
                       {props.title}
                    </div>
                </div>

                <div className="home-about__wrapper__content">
                    <div className="home-about__text-left">
                        <p>{props.paraOne}</p>
                    </div>
                    <div className="home-about__text-right">
                        <p>{props.paraTwo}</p>
                    </div>
                </div>

                {props.display ? 
                <div className="home-about__cta">
                    <Cta ctaText="Know More" />
                </div>: null
                }
                
            </div>
        </Container>
    </div>
  )
}

export default HomeAbout