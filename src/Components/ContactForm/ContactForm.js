import React, {useRef} from 'react'
import Container from '../Container/Container'
import Cta from '../CTA/Cta'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import location from '../../Assets/Images/location.png'
import email from '../../Assets/Images/email.png'
import call from '../../Assets/Images/telephone.png'
import emailjs from '@emailjs/browser';

import './ContactForm.scss'

function ContactForm() {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_myapzzi', 'template_91pnwq6', form.current, '3fOLPfZYET-Nm5AzA')
      .then((result) => {
          alert("Thank You for contacting us. We will get back to you soon.")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form">
        <Container>
            <div className="row">
                <div className="col-12 col-md-6">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-row">
                            <h4>Name*</h4>
                            <input name="from_name" type="text" required/>
                        </div>

                        <div className="form-row">
                            <h4>Email*</h4>
                            <input name="email" type="e-mail" required/>
                        </div>

                        <div className="form-row">
                            <h4>Phone Number*</h4>
                            <input name="telephone" type="tel" required/>
                        </div>

                        <div className="form-row">
                            <h4>Message</h4>
                            <textarea name="message" type="message" rows={5}></textarea>
                        </div>

                        <div className="submit-button">
                            <Cta ctaText="Submit"/>
                        </div>
                    </form>
                </div>

                <div className="col-12 col-md-6">
                    <div className="contact-info-wrapper">
                        <div className="contact-info-item">
                            <h2>Vihaan</h2>
                        </div>

                        <div className="contact-info-item">
                            <img src={location} alt="" />
                            <p>Address</p>
                        </div>

                        <div className="contact-info-item">
                            <img src={call} alt="" />
                            <p>
                                +91 7358103456
                            </p>
                        </div>

                        <div className="contact-info-item">
                            <img src={email} alt="" />
                            <p>info@vihaanvt.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default ContactForm