import React, { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import gsap from 'gsap';
import {ScrollTrigger } from 'gsap/all';
import {AnimatePresence } from 'framer-motion'
import Contact from '../Pages/Contact';
import Weddings from '../Pages/Weddings';
import Blogs from '../Pages/Blogs';
import BlogInner from '../Pages/BlogInner';
import Government from '../Pages/Government';
import Social from '../Pages/Social';
import Corporate from '../Pages/Corporate';
import Gallery from '../Pages/Gallery';
import ScrollToTop from './ScrollToTop';
import FAQ from '../Pages/FAQ';

function AnimatedRoutes() {
const location = useLocation();

useEffect(()=>{
  gsap.registerPlugin( ScrollTrigger)
})
  const KillFunction = () =>{
    let sc = ScrollTrigger.getAll();
      sc.forEach(s => {
        s.kill();
      })

      console.log(sc)

      ScrollTrigger.update();
      ScrollTrigger.refresh();
  }
  return (
    
      <AnimatePresence>
        <ScrollToTop>
          {/* <KillFunction/> */}
          <Routes location={location} key={location.pathname}>

              <Route exact path="/" element={<Home/>} /> 
              <Route exact path="/:id" element={<BlogInner/>}/>
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/contact" element={<Contact/>} />
              <Route exact path="/weddingplanner" element={<Blogs/>} />
              <Route exact path="/luxury-wedding-planning-services" element={<Weddings/>} />
              <Route exact path="/wedding-planning-portfolio-photo-gallery" element={<Gallery/>} />
              <Route exact path="/government" element={<Government/>} />
              <Route exact path="/social-event-management-company" element={<Social/>} />
              <Route exact path="/corporate-event-management-company" element={<Corporate/>} />
              <Route exact path="/faq" element={<FAQ/>} />
              <Route exact path="*" element={<div>
                <h1>404 Page Not Found</h1>
              </div>}/>
          </Routes> 
        </ScrollToTop>
          
      </AnimatePresence>
  )
}

export default AnimatedRoutes