import React from 'react'
import Header from '../Components/Header/Header'
import InnerHero from '../Components/InnerHero/InnerHero'
import Question from '../Components/Question/Question'
import Footer from '../Components/Footer/Footer';
import InnerRow from '../Components/InnerRow/InnerRow';
import { Helmet } from 'react-helmet';
import InnerPageContent from '../Components/InnerPageContent/InnerPageContent';
import { ipc } from '../Components/Data';

function Events() {
  return (
    <div>
        <Helmet>
          <title>Luxury wedding planning services in Ahmedabad, Gujarat, India.</title>
        </Helmet>
        <Header/>
        <InnerHero caption="" title="Wedding management company in India" captionTwo=""/>
        <InnerPageContent paraOne={ipc.weddings.contentOne} paraTwo={ipc.weddings.contentTwo}/>
        <InnerRow
        titleOne= {ipc.weddings.rowOneTitle}
        contentOne= {ipc.weddings.rowOneContent}
        imageOne={ipc.weddings.rowOneImg}

        titleTwo={ipc.weddings.rowTwoTitle}
        contentTwo={ipc.weddings.rowTwoContent}
        imageTwo={ipc.weddings.rowTwoImg}

        />
        {/* <Question/> */}
        <InnerRow
        titleOne= {ipc.weddings.rowThreeTitle}
        contentOne= {ipc.weddings.rowThreeContent}
        imageOne={ipc.weddings.rowThreeImg}


        titleTwo={ipc.weddings.rowFourTitle}
        contentTwo={ipc.weddings.rowFourContent}
        imageTwo={ipc.weddings.rowFourImg}

        />

        <InnerRow
        titleOne= {ipc.weddings.rowFiveTitle}
        contentOne= {ipc.weddings.rowFiveContent}
        imageOne={ipc.weddings.rowFiveImg}


        titleTwo={ipc.weddings.rowSixTitle}
        contentTwo={ipc.weddings.rowSixContent}
        imageTwo={ipc.weddings.rowSiximg}

        />

        <InnerRow
        titleOne= {ipc.weddings.rowSevenTitle}
        contentOne= {ipc.weddings.rowSevenContent}
        imageOne={ipc.weddings.rowSevenImg}


        titleTwo={ipc.weddings.rowEightTitle}
        contentTwo={ipc.weddings.rowEightContent}
        imageTwo={ipc.weddings.rowEightImg}

        />
        <Footer/>
    </div>
  )
}

export default Events