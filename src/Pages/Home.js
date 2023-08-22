import { useEffect } from 'react'
import FeatSection from '../Components/FeatSection/FeatSection';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import HomeHero from '../Components/HomeHero/HomeHero';
import HomeMarketingOne from '../Components/HomeMarketingOne/HomeMarketingOne';
import OfferDrag from '../Components/OfferDrag/OfferDrag';
import Question from '../Components/Question/Question';
import Wcu from '../Components/Wcu/Wcu';
import gsap, {Power0} from 'gsap';
import { CSSRulePlugin, ScrollTrigger, CSSPlugin } from 'gsap/all';
import Circle from '../Components/Circle/Circle';
import HomeAbout from '../Components/HomeAbout/HomeAbout';
import { Helmet } from 'react-helmet';
import { aboutContent } from '../Components/Data';

function Home() {
    gsap.registerPlugin(CSSPlugin, CSSRulePlugin, ScrollTrigger)

    useEffect(()=>{
        
      // FEAT SECTION START
        gsap.timeline({
          scrollTrigger: {
            trigger: '.feat-section',
            scrub: true
          }
        }).from('.image1', {
          top: '50%'
        }, 0).from('.image3', {
          top: '20%'
        }, 0)

      // FEAT SECTION END

      // WCU ANIMATION START
    

      // ScrollTrigger.matchMedia({
      //   "(min-width: 992px)": function(){
      //     const size = document.querySelector('.feat-card__wrapper').getBoundingClientRect().height;

      //     ScrollTrigger.create({
      //       trigger: '#wcu',
      //       start: "top top",
      //       end: () => `+=${size}px`,
      //       scrub: true,
      //       pin: '.wcu__title',
      //     })
      //   }
      // })

      // if(window.matchMedia("(min-width: 992px)").matches) {
        
      //     var tlft1 = gsap.timeline({
      //       scrollTrigger:{
      //           trigger: '.wcu .one',
      //           scrub: true,
      //           start: '-200px top',
      //           end: '-100px top',
      //       }
      //   })

      //   tlft1.to('.one .fc', {
      //       background: '#50162e'
      //   }, 0).to('.one .fc__title h2', {
      //       color: '#fff'
      //   }, 0).to('.one .fc__title img', {
      //       opacity: 1
      //   }, 0).to('.one .fc__text p', {
      //       color: '#fff'
      //   }, 0)


      //   var tlft2 = gsap.timeline({
      //       scrollTrigger:{
      //           trigger: '.wcu .two',
      //           scrub: true,
      //           start: '-200px top',
      //           end: '-100px top',
      //       }
      //   })

      //   tlft2.to('.two .fc', {
      //       background: '#50162e'
      //   }, 0).to('.two .fc__title h2', {
      //       color: '#fff'
      //   }, 0).to('.two .fc__title img', {
      //       opacity: 1
      //   }, 0).to('.two .fc__text p', {
      //       color: '#fff'
      //   }, 0)

    

      //   var tlft3 = gsap.timeline({
      //       scrollTrigger:{
      //           trigger: '.wcu .three',
      //           scrub: true,
      //           start: '-200px top',
      //           end: '-100px top',
      //       }
      //   })

      //   tlft3.to('.three .fc', {
      //       background: '#50162e'
      //   }, 0).to('.three .fc__title h2', {
      //       color: '#fff'
      //   }, 0).to('.three .fc__title img', {
      //       opacity: 1
      //   }, 0).to('.three .fc__text p', {
      //       color: '#fff'
      //   }, 0)

      //   var tlft4 = gsap.timeline({
      //     scrollTrigger:{
      //         trigger: '.wcu .four',
      //         scrub: true,
      //         start: '-200px top',
      //         end: '-100px top',
      //     }
      // })

      // tlft4.to('.four .fc', {
      //     background: '#50162e'
      // }, 0).to('.four .fc__title h2', {
      //     color: '#fff'
      // }, 0).to('.four .fc__title img', {
      //     opacity: 1
      // }, 0).to('.four .fc__text p', {
      //     color: '#fff'
      // }, 0)

      // }
    // WCU ANIMATION END
   

    // MARKETING ANIMATION START
    var t1 = gsap.timeline({
      scrollTrigger:{
        trigger: '.marketing-one',
        start: '-300px top',
        end: 'bottom bottom',
        scrub: false
      }
    })
    t1.from('.wtc__image', {
      opacity: 0,
      y: '20%'
    }, 0).from('.wtc__title', {
      y: '20%',
      opacity: 0,
    }, 0.4).from('.wtc__caption', {
      y: '20%',
      opacity: 0
    }, 0.8).from('.wtc__arrow', {
      y: '20%',
      opacity: 0
    }, 1).from('.wtc__border', {
      y: '20%',
      width: 0
    }, 1.2)

      
    // MARKETING ANIMATION END
    
      ScrollTrigger.getAll().forEach(t=>{
        setTimeout(()=>{
          t.disable();
          t.enable();
        }, 50)
      })

    
    }, [])
    
  return (

    <div id="home" >
        <Helmet>
          <title>Wedding planner in Ahmedabad, Destination wedding planner India</title>
        </Helmet>
        <Header/>
        <HomeHero/>
        <HomeMarketingOne/>
        <HomeAbout 
        title="Looking for the best audio video company" 
        paraOne={aboutContent.home.paraOne}
        paraTwo={aboutContent.home.paraTwo}
        display="yes" />
        <OfferDrag/>
        <Wcu/>
        {/* <Question/>
        <FeatSection/> */}
        <Footer/>
    </div>   
  )
}

export default Home