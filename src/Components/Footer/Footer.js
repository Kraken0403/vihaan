import React from 'react'
import Container from '../Container/Container';
import './Footer.scss';

function Footer() {
  return (
      <div className="footer--parent">
          <div className='footer-main'>
            <Container>
                <div className="footer__wrapper">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="footer__menu row">
                                <div className="col-6 col-md-4">
                                    <div className="footer__menu__list">
                                        <div className="footer__menu__list__header">
                                            <h6>Navigation</h6>
                                        </div>
                                        <div className="footer__menu__list__item">
                                            <a href="/">
                                                <p>Home</p>
                                            </a>
                                        </div>
                                        <div className="footer__menu__list__item">
                                            <a href="/about">
                                                <p>About Us</p>
                                            </a>
                                        </div>
                                
                                        <div className="footer__menu__list__item">
                                            <a href="/">
                                                <p>Blog</p>
                                            </a>
                                        </div>
                                        <div className="footer__menu__list__item">
                                            <a href="/">
                                                <p>Gallery</p>
                                            </a>
                                        </div>
                                        <div className="footer__menu__list__item">
                                            <a href="/contact">
                                                <p>Contact Us</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="footer__menu__list__header">
                                        <h6>Contact Info</h6>
                                    </div>
                                    <div className="footer__menu__list__item">
                                        <p><span style={{fontWeight: '600'}}>Address:</span>Satellite Ahmedabad , Gujarat (India)
                                        </p>
                                    </div>
                                    <div className="footer__menu__list__item">
                                        <p><span style={{fontWeight: '600'}}>Phone:</span> +91 7358103456</p>
                                    </div>
                                    <div className="footer__menu__list__item">
                                        <a href="#">
                                            <p><span style={{fontWeight: '600'}}>e-mail</span> contact@vihaan.com</p>
                                        </a>
                                    </div>

                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="footer__menu__list__header">
                                        <h6>Follow Us</h6>
                                    </div>
                                    <div className="footer__menu__list__item">
                                        <a href="/" rel='nofollow'>
                                            <p>Instagram</p>
                                        </a>
                                    </div>
                                    <div className="footer__menu__list__item">
                                        <a href="/" rel='nofollow'>
                                            <p>Facebook</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <h3 className='footer__caption'>Audio Video Solutions Provider in Ahmedabad</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className="copyright">
            <p>Vihaan VT Infotech in Ahmedabad © 2023| All Rights Reserved. </p>
            <p>Web Developed by <a rel='nofollow' href="https://www.logionsolutions.com" style={{color: '#fff'}}>Logion Solutions</a></p>
        </div>
      </div>
    
  )
}

export default Footer