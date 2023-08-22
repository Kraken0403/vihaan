import React from 'react'
import Container from '../Container/Container';
import './InnerHero.scss';

function InnerHero(props) {
  return (
    <div className='inner-hero'>
        <Container>
            <div className="inner-hero__caption">
                <p>{props.caption}</p>
            </div>

            <div className="inner-hero__title">
                <h1>{props.title}</h1>
            </div>

            <div className="inner-hero__caption-two">
                <p>{props.captionTwo}</p>
            </div>
        </Container>
    </div>
  )
}

export default InnerHero