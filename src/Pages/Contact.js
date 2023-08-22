import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm'
import Header from '../Components/Header/Header'
import InnerHero from '../Components/InnerHero/InnerHero'
import Footer from '../Components/Footer/Footer';

function Contact() {
  return (
    <div>
        <Header/>
        <InnerHero caption="Contact" title="Let's Chat" captionTwo="We would love to know about your next project!"/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact