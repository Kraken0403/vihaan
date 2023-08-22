import React, { useState } from 'react'
import './Header.scss';
import logo from '../../Assets/Images/logo-new.png'
import { NavLink } from 'react-router-dom';
import arrow from '../../Assets/Images/arrow-color-right.png'
import gsap from 'gsap';
import CtaContact from '../CTAContact/CtaContact';

function Header() {
    const [toggle, setToggle ] = useState(false);

    const toggleMenu = () => setToggle(!toggle);

    if(toggle) {
        gsap.timeline().to('.mobile__menu__list', {
            left: '0%'
        }).to('.first', {
            rotateZ: '135deg',
            top: '5px'
        }, 0).to('.third', {
            rotateZ: '-135deg',
            top: '5px'
        }, 0).to('.second', {
            opacity: 0
        }, 0)
    }

    if(!toggle) {
        gsap.timeline().to('.mobile__menu__list', {
            left: '-100%'
        }).to('.first' ,{
            rotateZ: '0deg',
            top: '0px'
        }, 0).to('.third', {
            rotateZ: '0deg',
            top: '10px'
        }, 0).to('.second', {
            opacity: 1
        }, 0)
    }
  return (
    <div id="header" className='header'>
        <div className="container-fluid">
            <div className="header__wrapper">
                <div className="header__logo">
                    <a href="/">
                        <h2>Vihaan VT </h2>
                    </a>
                </div>
                <div className="header__menu">
                    <div className="header__menu__list desktop">
                        <ul>
                            {/* <li className="header__menu__list__item">
                                <NavLink to="/"><p>Home</p></NavLink>
                            </li> */}
                            
                            <li className="header__menu__list__item">
                                <NavLink to="/about"> <p>About Us</p></NavLink>
                            </li>

                            {/* <li className="header__menu__list__item">
                                <NavLink to="/government">
                                    <p>Government Events</p>
                                </NavLink>
                            </li> */}
                            <li className="header__menu__list__item">
                                <NavLink to="/wedding-planning-portfolio-photo-gallery"><p>Gallery</p></NavLink>
                                {/* <p>Weddings</p> */}
                            </li>
                            <li className="header__menu__list__item">
                                <NavLink to="/weddingplanner"> <p>Blogs</p></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="mobile__menu">
                        <div className="mobile__menu__ham" onClick={toggleMenu}>
                            <div className='first'></div>
                            <div className='second'></div>
                            <div className='third'></div>
                        </div>

                        <div className="mobile__menu__list">
                            <ul>
                                <li className="header__menu__list__item">
                                    <NavLink to="/about"> 
                                        <p>About Us</p>
                                        <img src={arrow} alt="" />
                                    </NavLink>
                                </li>

                                <li className="header__menu__list__item">
                                    <NavLink to="/wedding-planning-portfolio-photo-gallery/"> 
                                        <p>Gallery</p>
                                        <img src={arrow} alt="" />
                                    </NavLink>
                                </li>
                                
                                <li className="header__menu__list__item">
                                    <NavLink to="/weddingplanner">
                                        <p>Blogs</p>
                                        <img src={arrow} alt="" />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <Cta ctaText="Let's talk"/> */}
                    <CtaContact ctaText="Let's Talk"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header