import React from 'react'
import Container from '../Container/Container';
import './InnerRow.scss';

function IrOne(props) {

  return (
    <div className='ir'>
        <Container>
            <div className="ir__wrapper ir__one">
                <div className="ir__row">
                    <div className="ir__col ir__col-50">
                        <div className="ir__col__head">
                            <h1>
                                {props.title}
                            </h1>
                        </div>

                        <div className="ir__col__para">
                            <p>{props.content}</p>
                        </div>
                    </div>

                    <div className="ir__col-50 ir__col">
                        <div className="ir__col__image">
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default IrOne