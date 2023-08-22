import React from 'react'
import './DragCard.scss';

function DragCard(props) {
  return (
    <div className='drag-card'>
        <div className="drag-card__wrapper">
            <div className="drag-card__number">
                <h1><span>{props.num}</span></h1>
            </div>
            <div className="drag-card__title">
                <h2>{props.title}</h2>
            </div>
            <div className="drag-card__para">
                <p>{props.content}</p>
            </div>
        </div>
    </div>
  )
}

export default DragCard