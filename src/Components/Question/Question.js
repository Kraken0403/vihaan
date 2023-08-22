import React from 'react'
import Container from '../Container/Container'
import './Question.scss'

function Question() {
  return (
    <div className='question'>
        <Container>
            <h2>Got A Question ?</h2>
            <div className="question__main">
              <a href="/faq">
                  <h3>Find Your Answer in our FAQ's</h3>
              </a>
            </div>
        </Container>
    </div>
  )
}

export default Question