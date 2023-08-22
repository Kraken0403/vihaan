import React, { useEffect, useState } from 'react'
import Container from '../Container/Container';
import './BlogComp.scss'

function BlogComp(props) {

    const [ result, setResults ] = useState([props.title, props.id, props.date]);

    useEffect(()=>{
        setResults(result);
        
    }, [result])

  return (
    // console.log(result),
   <div className='blog__main'>
      <Container>
          <div className="blog__wrapper">
            <div className="blog__title">
              <h1 dangerouslySetInnerHTML={{__html: result[0]}}></h1>
            </div>

            <div className="blog__date">
              {/* <p> {result[2]}</p> */}
            </div>
          </div>
      </Container>
    </div>
  )
}

export default BlogComp