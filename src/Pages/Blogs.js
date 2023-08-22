import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import BlogComp from '../Components/BlogComp/BlogComp';
import InnerHero from '../Components/InnerHero/InnerHero'
import '../Components/Blog.scss'
import { Helmet } from 'react-helmet';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{

        axios.get('https://madworldindia.com/backend/wp-json/wp/v2/posts/?_embed&per_page=100').then((res) => {
            setBlogs(res.data);
            console.log(res.data)
            setLoading(false)
        })

    }, [])

    const styles = {
        marginTop: '10rem'
    }

  return (
    <div>
      <Helmet>
        <title>Check out our blogs</title>
      </Helmet>
        <Header/>
        <InnerHero caption="Blogs" title="Check out our blogs" captionTwo=""/>
        <div className="blogs" style={styles}>
          {loading ? (
            <div>
              <h1 className='loading-animation'>Loading.....</h1>
            </div>
          ) : (
          <div className='blogs-loaded'>

          {/* {blogs.map((blog, i) => (
            
            <a key={i} href={`/${blog.slug}`}>
              <BlogComp key={i} title={blog.title.rendered} id={blog.id} />
            </a>
          ))} */}

          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          <BlogComp title="Blog Sample Title"/>
          
          </div>)}
          
        </div>
        <Footer/>
    </div>
  )
}

export default Blogs