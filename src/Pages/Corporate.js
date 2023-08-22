import React from 'react'
import Header from '../Components/Header/Header'
import InnerRow from '../Components/InnerRow/InnerRow'
import InnerHero from '../Components/InnerHero/InnerHero'
import Footer from '../Components/Footer/Footer'
import { Helmet } from 'react-helmet'
import { ipc } from '../Components/Data'
import IrOne from '../Components/InnerRow/IrOne'
import InnerPageContent from '../Components/InnerPageContent/InnerPageContent'
function Corporate() {
  return (
    <div>
        <Helmet>
          <title>Corporate event management company in Ahmedabad, Gujarat, India.</title>
        </Helmet>
        <Header/>
        <InnerHero caption="" title="Corporate Event Management" captionTwo="Perfectly Tailored corporate events for you"/>
        <InnerPageContent paraOne={ipc.corporate.contentOne} paraTwo={ipc.corporate.contentTwo}
        />

        <InnerRow
        titleOne={ipc.corporate.rowOneTitle} 
        contentOne={ipc.corporate.rowOneContent}
        imageOne={ipc.corporate.rowOneImg}

        titleTwo={ipc.corporate.rowTwoTitle}
        contentTwo={ipc.corporate.rowTwoContent}
        imageTwo={ipc.corporate.rowTwoImg}

        />
        {/* <Question/> */}
        <InnerRow
        titleOne={ipc.corporate.rowThreeTitle} 
        contentOne={ipc.corporate.rowThreeContent}
        imageOne={ipc.corporate.rowThreeImg}

        titleTwo={ipc.corporate.rowFourTitle}
        contentTwo={ipc.corporate.rowFourContent}
        imageTwo={ipc.corporate.rowFourImg}

        />
{/* 
        <InnerRow
        titleOne={ipc.corporate.rowThreeTitle} 
        contentOne={ipc.corporate.rowThreeContent}

        titleTwo={ipc.corporate.rowFourTitle}
        contentTwo={ipc.corporate.rowFourContent}
        /> */}

        <InnerRow
        titleOne={ipc.corporate.rowFiveTitle} 
        contentOne={ipc.corporate.rowFiveContent}
        imageOne={ipc.corporate.rowFiveImg}

        titleTwo={ipc.corporate.rowSixTitle}
        contentTwo={ipc.corporate.rowSixContent}
        imageTwo={ipc.corporate.rowSixImg}

        />

        <InnerRow
        titleOne={ipc.corporate.rowSevenTitle} 
        contentOne={ipc.corporate.rowSevenContent}
        imageOne={ipc.corporate.rowSevenImg}


        titleTwo={ipc.corporate.rowEightTitle}
        contentTwo={ipc.corporate.rowEightContent}
        imageTwo={ipc.corporate.rowEightImg}

        />

        <InnerRow
        titleOne={ipc.corporate.rowNineTitle} 
        contentOne={ipc.corporate.rowNineContent}
        imageOne={ipc.corporate.rowNineImg}
        

        titleTwo={ipc.corporate.rowTenTitle}
        contentTwo={ipc.corporate.rowTenContent}
        imageTwo={ipc.corporate.rowTenImg}

        />

        <IrOne 
        title={ipc.corporate.rowElevenTitle}
        content={ipc.corporate.rowElevenContent}
        image={ipc.corporate.rowElevenImg}
        />
        <Footer/>
    </div>
  )
}

export default Corporate