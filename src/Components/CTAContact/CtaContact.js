import React from 'react'
import { Link } from 'react-router-dom'
import './Cta.scss'

function CtaContact(props) {
  return (
    <div className='cta'>

        <a href="/contact">
          <button className='cta__button'>
              {props.ctaText}
          </button>
        </a>
    </div>
  )
}

export default CtaContact