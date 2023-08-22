import React from 'react'
import Container from '../Container/Container'
import './Team.scss'

function Team() {
  return (
    <div className='team'>
        <Container>
            <div className="team__wrapper">
                <div className="team__head">
                    <h1>Our Team</h1>
                </div>

                <div className="team__caption">
                    <p>Meet our Team of Experts</p>
                </div>

                <div className="team__cards">
                    <div className="team__cards__item">
                        <div className="team__cards__item__head">
                            <h2>Hospitality Experts</h2>
                        </div>
                        <div className="team__cards__item__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus consequat massa a feugiat. Duis faucibus molestie ante, vitae pretium enim iaculis non. Etiam non metus sodales, sodales elit quis. </p>
                        </div>
                    </div>

                    <div className="team__cards__item">
                        <div className="team__cards__item__head">
                            <h2>Production Experts</h2>
                        </div>
                        <div className="team__cards__item__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus consequat massa a feugiat. Duis faucibus molestie ante, vitae pretium enim iaculis non. Etiam non metus sodales, sodales elit quis. </p>
                        </div>
                    </div>

                    <div className="team__cards__item">
                        <div className="team__cards__item__head">
                            <h2>Technical Experts</h2>
                        </div>
                        <div className="team__cards__item__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus consequat massa a feugiat. Duis faucibus molestie ante, vitae pretium enim iaculis non. Etiam non metus sodales, sodales elit quis. </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Team