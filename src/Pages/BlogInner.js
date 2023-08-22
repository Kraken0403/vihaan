import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Container from '../Components/Container/Container';
import { slugs } from '../Components/Data';
import right from '../Assets/Images/arrow-color-right.png'
import left from '../Assets/Images/arrow-color-left.png'
import '../Components/BlogInner.scss';
import ScrollToTop from '../Components/ScrollToTop';
import { Helmet } from 'react-helmet';


function BlogInner() {

    const params = useParams();
    
    const [ blog, setBlog ]  = useState([]);
    const [ loading, setLoading ] = useState(true);

    let one = `https://madworldindia.com/backend/wp-json/wp/v2/posts?slug=${params.id}`;
    let next = `https://madworldindia.com/backend/wp-json/wp/v2/posts?slug=${params.id}/next`;

    useEffect(()=> {
      window.scrollTo(0, 0);
      
      setLoading(true);
      console.log(next)
      axios.get(one)
      .then(res => {
        setBlog(res.data);
        // console.log(res.data)
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })
      // window.scrollTo(0,0)
    }, [params.id])

  return (    
    // console.log(blog),
    <div>
      
        <Header/>
        {loading ? (<h1 className='loading-anim'>Loading ...</h1>) : (
          
          <div className="ib">
            <Helmet>
              <title>{blog[0].title.rendered}</title>
            </Helmet>
            <ScrollToTop/>
            <Container>
              <div className="ib__wrapper">
                <div className="ib__title">
                  <h1 dangerouslySetInnerHTML={{__html: blog[0].title.rendered}}></h1>
                </div>
                {/* <div className="ib__date"><p>{blog[0].date}</p></div> */}
                <div className="ib__content">
                  <p dangerouslySetInnerHTML={{__html: blog[0].content.rendered}}></p>
                </div>

                <div className="next-prev-blogs">
                  {blog[0].next ?
                      <div className="prev-link">
                        <img src={left} alt="" />
                        <a href={`/${blog[0].next.slug}`}>
                          <h2 dangerouslySetInnerHTML={{__html: blog[0].next.title}}></h2>
                        </a>
                    </div>
                    : null}

                  {blog[0].previous ?
                      <div className="next-link">
                        <a href={`/${blog[0].previous.slug}`}>
                          <h2 dangerouslySetInnerHTML={{__html: blog[0].previous.title}}></h2>
                        </a>
                        <img src={right} alt="" />
                    </div>
                    : null}
                </div>

              </div>
            </Container>
          </div>
        )}
        <Footer/>   
    </div>
  )
}

export default BlogInner