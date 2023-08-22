import React from 'react'
import Header from '../Components/Header/Header'
import InnerRow from '../Components/InnerRow/InnerRow'
import InnerHero from '../Components/InnerHero/InnerHero'
import Question from '../Components/Question/Question'
import Footer from '../Components/Footer/Footer'
import { Helmet } from 'react-helmet'
import { ipc } from '../Components/Data'
import InnerPageContent from '../Components/InnerPageContent/InnerPageContent'
import sample from '../Assets/Home/reception.jpg'

function Social() {
  return (
    <div>
        <Helmet>
          <title>Social event management Company in Ahmedabad, Gujarat, India.</title>
        </Helmet>
        <Header/>
        <InnerHero caption="" title="Social Events" captionTwo="Perfectly Tailored Social events for you"/>
        <InnerPageContent paraOne={ipc.social.contentOne} paraTwo={ipc.social.contentTwo}/>

        <InnerRow 
        titleOne={ipc.social.rowOneTitle} 
        contentOne={ipc.social.rowOneContent} 
        imageOne={ipc.social.rowOneImage}

        titleTwo={ipc.social.rowTwoTitle} 
        contentTwo={ipc.social.rowTwoContent} 
        imageTwo={ipc.social.rowTwoImage}
        />
        {/* <Question/> */}
        <InnerRow
        titleOne={ipc.social.rowThreeTitle}
        contentOne={ipc.social.rowThreeContent}
        imageOne={ipc.social.rowThreeImage}


        titleTwo={ipc.social.rowFourTitle}
        contentTwo={ipc.social.rowFourContent}
        imageTwo={ipc.social.rowFourImage}

        />

        <InnerRow
        titleOne={ipc.social.rowFiveTitle}
        contentOne={ipc.social.rowFiveContent}
        imageOne={ipc.social.rowFiveImage}

        titleTwo={ipc.social.rowSixTitle}
        contentTwo={ipc.social.rowSixContent}
        imageTwo={ipc.social.rowSixImage}

        />


        <Footer/>
    </div>
  )
}

export default Social