import React from 'react'
import './FeatCard.scss'
import flower from '../../Assets/Images/white-flower.png'
function FeatCard(props) {
  return (
    <div className='fc'>
        <div className="fc__wrapper">
            <div className="fc__title">
                <h2>{props.title}</h2>
                <img src={flower} alt="" />
            </div>
            <div className="fc__text">
                <p>{props.content}</p>
            </div>
        </div>
    </div>
  )
}

export default FeatCard