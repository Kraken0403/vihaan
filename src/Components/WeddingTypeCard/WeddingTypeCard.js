import React from 'react'
import wtcImg from '../../Assets/Images/wtc-image.png'
import './WeddingTypeCard.scss';
import arrow from '../../Assets/Images/arrow__right.svg'
import { Link } from 'react-router-dom';

function WeddingTypeCard(props) {
  return (
    <div className='wtc'>
        <div className="wtc__wrapper">
            <Link to={props.link}>
                <div className="wtc__arch"></div>
                <div className="wtc__image">
                    <img src={props.image} alt="" />
                </div>
                <div className="wtc__title">
                    <h3>{props.title}</h3>
                </div>
                <div className="wtc__caption">
                    <p>{props.caption}</p>
                </div>
                <div className="wtc__arrow">
                    <img src={arrow} alt="" />
                </div>
                <div className="wtc__border"></div>
            </Link>
        </div>  
    </div>
  )
}

export default WeddingTypeCard