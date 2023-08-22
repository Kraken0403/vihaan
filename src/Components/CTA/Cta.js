import React from 'react'
import { Link } from 'react-router-dom'
import './Cta.scss'

function Cta(props) {
  return (
    <div className='cta'>

        <a href="/about">
          <button className='cta__button'>
              {props.ctaText}
          </button>
        </a>
    </div>
  )
}

export default Cta