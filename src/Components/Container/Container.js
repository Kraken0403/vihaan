import React from 'react'
import './Container.scss'

function Container({children}) {
  return (
   
    <div className="container-custom">
        {children}
    </div>
  )
}

export default Container