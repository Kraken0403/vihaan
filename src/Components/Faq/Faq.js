import React from 'react'
import InnerHero from '../InnerHero/InnerHero';
import styles from './Faq.module.scss';
import Container from '../Container/Container';
import Accordion from '../Accordion/Accordion.js'


function Faq() {
  return (
    <div className={styles.faq}>
        <InnerHero title="FAQ" caption="Get your answers here" captionTwo=""/>
        <Container>
            <div className={styles.accordion__main}>
                <Accordion title="Click Me!" content="this is content 1" />
                <Accordion title="Click Me!" content="this is content 2" /> 
                <Accordion title="Click Me!" content="this is content 3" /> 
                <Accordion title="Click Me!" content="this is content 4" /> 
                <Accordion title="Click Me!" content="this is content 5" /> 
                <Accordion title="Click Me!" content="this is content 6" /> 
                <Accordion title="Click Me!" content="this is content 7" /> 
                <Accordion title="Click Me!" content="this is content 8" /> 
                <Accordion title="Click Me!" content="this is content 9" /> 
                <Accordion title="Click Me!" content="this is content 10" /> 
                <Accordion title="Click Me!" content="this is content 11" /> 
                <Accordion title="Click Me!" content="this is content 12" /> 
            </div>
        </Container>
    </div>
  )
}

export default Faq