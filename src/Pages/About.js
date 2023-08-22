import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import AboutHero from '../Components/AboutHero/AboutHero';
import HomeAbout from '../Components/HomeAbout/HomeAbout';
import Footer from '../Components/Footer/Footer';
import Team from '../Components/Team/Team';
import Letschat from '../Components/Letschat/Letschat'
import ScrollToTop from '../Components/ScrollToTop';
import { Helmet } from 'react-helmet';
import { aboutContent } from '../Components/Data';

function About() {
  useEffect(()=>{
    <ScrollToTop/>
  }, [])
  
  return (
    <div>
      <Helmet>
        <title>Event management company in India</title>
      </Helmet>
      <Header/>
      <AboutHero/>
      <HomeAbout title="About us" paraOne={aboutContent.about.paraOne} paraTwo={aboutContent.about.paraTwo}/>
      {/* <Team/> */}
      {/* <Founder/> */}
      <Letschat/>
      <Footer/>
    </div>
  )
}

export default About