import React from 'react'
import Container from '../Container/Container'
import './InnerPageContent.scss'

function InnerPageContent(props) {
  return (
    <div className='ipc'>
        <Container>
            <div className="ipc-wrapper">
                <div className="ipc-wrapper-content">
                    <div className="ipc-wrapper-content-left">
                        <p>
                            {props.paraOne}
                        </p>
                    </div>
                    <div className="ipc-wrapper-content-right">
                        <p>
                            {props.paraTwo}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default InnerPageContent