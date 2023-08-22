import React, { useEffect } from 'react'
import Container from '../Container/Container';
import FeatCard from '../FeatCard/FeatCard';
import gsap from 'gsap';
import { CSSRulePlugin, ScrollTrigger, CSSPlugin } from 'gsap/all';
import './Wcu.scss';
import { featureContent } from '../Data';
import { useRef } from 'react';

function Wcu() {

    gsap.registerPlugin(CSSPlugin, CSSRulePlugin, ScrollTrigger)

    const parent = useRef();
    const main = useRef();
    const pin = useRef();
    const one = useRef();
    const two = useRef();
    const three = useRef();
    const four = useRef();

    useEffect(()=> {
        
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function(){
          const size = document.querySelector('.feat-card__wrapper').getBoundingClientRect().height;

          ScrollTrigger.create({
            trigger: main.current,
            start: "top top",
            end: () => `+=${size}px`,
            scrub: true,
            pin: pin.current,
          })
        }
      })

      if(window.matchMedia("(min-width: 992px)").matches) {
        
          var tlft1 = gsap.timeline({
            scrollTrigger:{
                trigger: one.current,
                scrub: true,
                start: '-200px top',
                end: '-100px top',
            }
        })

        tlft1.to('.one .fc', {
            background: '#10192D'
        }, 0).to('.one .fc__title h2', {
            color: '#fff'
        }, 0).to('.one .fc__title img', {
            opacity: 1
        }, 0).to('.one .fc__text p', {
            color: '#fff'
        }, 0)


        var tlft2 = gsap.timeline({
            scrollTrigger:{
                trigger: two.current,
                scrub: true,
                start: '-200px top',
                end: '-100px top',
            }
        })

        tlft2.to('.two .fc', {
            background: '#10192D'
        }, 0).to('.two .fc__title h2', {
            color: '#fff'
        }, 0).to('.two .fc__title img', {
            opacity: 1
        }, 0).to('.two .fc__text p', {
            color: '#fff'
        }, 0)

    

        var tlft3 = gsap.timeline({
            scrollTrigger:{
                trigger: three.current,
                scrub: true,
                start: '-200px top',
                end: '-100px top',
            }
        })

        tlft3.to('.three .fc', {
            background: '#10192D'
        }, 0).to('.three .fc__title h2', {
            color: '#fff'
        }, 0).to('.three .fc__title img', {
            opacity: 1
        }, 0).to('.three .fc__text p', {
            color: '#fff'
        }, 0)

        var tlft4 = gsap.timeline({
          scrollTrigger:{
              trigger: four.current,
              scrub: true,
              start: '-200px top',
              end: '-100px top',
          }
      })

      tlft4.to('.four .fc', {
          background: '#10192D'
      }, 0).to('.four .fc__title h2', {
          color: '#fff'
      }, 0).to('.four .fc__title img', {
          opacity: 1
      }, 0).to('.four .fc__text p', {
          color: '#fff'
      }, 0)

      }
    })

  return (
    <div className='wcu' id='wcu' ref={main}>
        <Container>
            <div className="wcu__wrapper">
                <div className="wcu__row">
                    <div className="wcu__col-50">
                        <h2 className='wcu__title' ref={pin}>Why should we be your next choice?</h2>
                    </div>
                    <div className="wcu__col-50">
                        <div className="feat-card__wrapper" ref={parent}>
                            <div className="ft-card__wrapper one" ref={one}>
                                <FeatCard title={featureContent.one.title} content={featureContent.one.content}/>
                            </div>

                            <div className="ft-card__wrapper two" ref={two}>
                                <FeatCard title={featureContent.two.title} content={featureContent.two.content}/>
                            </div>

                            <div className="ft-card__wrapper three" ref={three}>
                                <FeatCard title={featureContent.three.title} content={featureContent.three.content}/>
                            </div>

                            <div className="ft-card__wrapper four" ref={four}>
                                <FeatCard title={featureContent.four.title} content={featureContent.four.content}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Wcu