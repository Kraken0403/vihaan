import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from '../Container/Container';
import DragCard from '../DragCard/DragCard';
import './OfferDrag.scss'
import arrowRight from '../../Assets/Images/arrow-color-right.png'
import arrowLeft from '../../Assets/Images/arrow-color-left.png'
import { dragCard } from '../Data';
function OfferDrag() {
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2.5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
          
        const { carouselState: { currentSlide } } = rest;
        
        return (
          <div className="carousel-button-group">
        
            <div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >
                <button className="c-slider_button -prev prev" data-slider="prev" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="false">
                    {/* <ChevronLeftIcon/> */}
                    <img src={arrowLeft} alt="" />
                </button>
            </div>
            
            
            <div onClick={() => next()}>
              <button className="c-slider_button -next next" data-slider="next" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false">
                  <img src={arrowRight} alt="" />
              </button>
            </div>
            
          </div>
        );
      };

  return (
    <div className='od'>
        <Container>
            <div className="od__title">
                <h1><span>All our Services</span></h1>
            </div>
        </Container>

        <div className="row container-swipe">
            
            <div className="col-lg-8 offset-lg-1">
                <Carousel responsive={responsive} autoPlaySpeed={3000} autoPlay={true} arrows={false}  shouldResetAutoplay={false} customButtonGroup={<ButtonGroup />} renderButtonGroupOutside infinite={true}  draggable={true} containerClass="container-swipe">
                    <div className="">
                        <DragCard num={1} title={dragCard.one.title} content={dragCard.one.content}/>
                    </div>
                    <div className="">
                        <DragCard num={2} title={dragCard.two.title} content={dragCard.two.content}/>
                    </div>
                    <div className="">
                        <DragCard num={3} title={dragCard.three.title} content={dragCard.three.content}/>
                    </div>
                    <div className="">
                        <DragCard num={4} title={dragCard.four.title} content={dragCard.four.content}/>
                    </div>

                    <div className="">
                        <DragCard num={5} title={dragCard.five.title} content={dragCard.five.content}/>
                    </div>
                    <div className="">
                        <DragCard num={6} title={dragCard.six.title} content={dragCard.six.content}/>
                    </div>

                    <div className="">
                        <DragCard num={7} title={dragCard.seven.title} content={dragCard.seven.content}/>
                    </div>

                    <div className="">
                        <DragCard num={8} title={dragCard.eight.title} content={dragCard.eight.content}/>
                    </div>

                    {/* <div className="">
                        <DragCard num={9} title={dragCard.nine.title} content={dragCard.nine.content}/>
                    </div>                        */}
                </Carousel>
            </div>
        </div>
 
    </div>
  )
}

export default OfferDrag