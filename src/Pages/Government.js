import React from 'react'
import Header from '../Components/Header/Header'
import InnerRow from '../Components/InnerRow/InnerRow'
import InnerHero from '../Components/InnerHero/InnerHero'
import Question from '../Components/Question/Question'
import Footer from '../Components/Footer/Footer'

function Government() {
  return (
    <div>
        <Header/>
        <InnerHero caption="Government Events" title="This is the title to see the second line" captionTwo="Perfectly Tailored weddings for you"/>
        <InnerRow/>
        <Question/>
        <InnerRow/>
        <Footer/>
    </div>
  )
}

export default Government