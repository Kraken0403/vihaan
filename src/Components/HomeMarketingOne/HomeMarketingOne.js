import React from 'react'
import Container from '../Container/Container'
import WeddingTypeCard from '../WeddingTypeCard/WeddingTypeCard'
import './HomeMarketingOne.scss'
import sample from '../../Assets/Images/sample-img.png'

function HomeMarketingOne() {

  return (
    <section className="marketing-one">
        <Container>
            <div className="marketing-one__title">
                <div className='title'> 
                  Spectrum of our 
                  <br/>
                  Many services
                </div>
            </div>
            <div className="marketing-one__card__wrapper row">
              <div className=" col-12 col-md-4">
                <div className="marketing-one__card one">
                  <WeddingTypeCard image={sample} title="Service 1" caption="The Best Audio Video Comoany" link="/"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="marketing-one__card two">
                  <WeddingTypeCard image={sample} title="Service 2" caption="The Best Audio Video Comoany" link="/"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="marketing-one__card three">
                <WeddingTypeCard image={sample} title="Service 3" caption="The Best Audio Video Comoany" link="/"
                  />
                </div>
              </div>
            </div>
           
        </Container>
    </section>
  )
}

export default HomeMarketingOne