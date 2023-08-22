import React, { useEffect } from 'react'
import Container from '../Container/Container'
import Cta from '../CTA/Cta'
import sample from '../../Assets/Images/sample-img.png'

import './HomeHero.scss'
import {motion} from 'framer-motion';
import gsap, {Power0} from 'gsap';
import { CSSRulePlugin, CSSPlugin } from 'gsap/all';

function HomeHero() {
    gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

    const rule = CSSRulePlugin.getRule('.home__hero__image')
    const rule2 = CSSRulePlugin.getRule('.home__hero__image:before')

    const splitTextAll = () =>{
        let line1 = document.querySelector('.home__hero__text .title .line-1');
        let text1 = line1.textContent.split("");
        let result1 = "";
        
        text1.forEach((t) => {
          result1 += "<span>" + t + "</span>";
        })
        line1.innerHTML = result1;
  
        let line2 = document.querySelector('.home__hero__text .title .line-2');
        let text2 = line2.textContent.split("");
        let result2 = "";
        
        text2.forEach((t) => {
          result2 += "<span>" + t + "</span>";
        })
        line2.innerHTML = result2;
  
        let line3 = document.querySelector('.home__hero__text .title .line-3');
        let text3 = line3.textContent.split("");
        let result3 = "";
        
        text3.forEach((t) => {
          result3 += "<span>" + t + "</span>";
        })
        line3.innerHTML = result3;
  
      } 
      
    useEffect(()=>{
          splitTextAll();
           // HERO ANIMATION START
        
            gsap.timeline().from('.home__hero__text .title .line span', {
                y: '100%',
                stagger: 0.02,
            }).from(rule2, {
            opacity: 1
            }, 0.2).from('.home__hero__text .caption', {
            opacity: 0
            }, 1).from('.home__hero__text .cta', {
            opacity: 0
            }, 1).from('.home__hero__logos', {
            opacity: 0
            }).from('.home__hero__logos__item', {
            opacity: 0, 
            stagger: 0.3,
            ease: Power0.easeOut
            })

        // HERO ANIMATION END
        })
  return (
    <div className='home__hero'>
        <Container>
            <div className="home__hero__wrapper">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <motion.div className="home__hero__text">
                            <div className='title'>
                                <div className='line line-1'>Complete</div>
                                <div className='line line-2'>Audio Video</div>
                                <div className='line line-3'> Solutions</div>
                            </div>
                            
                            <p className='caption'>Premium Solutions<br/>at the best price</p>
                           
                            
                            <Cta ctaText="Know More" />                     
                          
                        </motion.div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="home__hero__image">
                            {/* <img src={heroOval} alt="" /> */}
                            <img src={sample} alt="Destination wedding planner in Ahmedabad" />
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <div className="home__hero__logos">
                <div className="text">
                    <p>As Featured in</p>
                </div>
                <div className="home__hero__logos__items">
                    <div className="home__hero__logos__item">
                        <img src={femina} alt="" />
                    </div>
                    <div className="home__hero__logos__item">
                        <img src={femina} alt="" />
                    </div>
                    <div className="home__hero__logos__item">
                        <img src={femina} alt="" />
                    </div>
                    <div className="home__hero__logos__item">
                        <img src={femina} alt="" />
                    </div>
                    <div className="home__hero__logos__item">
                        <img src={femina} alt="" />
                    </div>
                    <div className="home__hero__logos__item">
                        <img src={femina} alt="" />
                    </div>
                </div>
            </div> */}
        </Container>
    </div>
  )
}

export default HomeHero