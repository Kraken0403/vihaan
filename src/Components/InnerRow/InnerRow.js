import React from 'react'
import Container from '../Container/Container';
import image from '../../Assets/Images/flower.jpg'
import './InnerRow.scss';

function InnerRow(props) {

  return (
    <div className='ir'>
        <Container>
            <div className="ir__wrapper">
                <div className="ir__row">
                    <div className="ir__col ir__col-50">
                        <div className="ir__col__head">
                            <h1>
                                {props.titleOne}
                            </h1>
                        </div>

                        <div className="ir__col__para">
                            <p>{props.contentOne}</p>
                        </div>
                    </div>

                    <div className="ir__col-50 ir__col">
                        <div className="ir__col__image">
                            <img src={props.imageOne} alt="" />
                        </div>
                    </div>
                </div>

                <div className="ir__row">
                    
                    <div className="ir__col-50 ir__col">
                        <div className="ir__col__image">
                            <img src={props.imageTwo} alt="" />
                        </div>
                    </div>

                    <div className="ir__col ir__col-50">
                        <div className="ir__col__head">
                            <h1>
                                {props.titleTwo}
                            </h1>
                        </div>

                        <div className="ir__col__para">
                            <p>{props.contentTwo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default InnerRow