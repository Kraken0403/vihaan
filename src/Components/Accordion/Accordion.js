// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import arrowDown from '../../Assets/Images/arrow_down.png'
import gsap from "gsap/dist/gsap";
import styles from './Accordion.module.scss'
export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    
    setIsShowing(!isShowing);

    gsap.to(arrow.current, {
        rotationZ: '+=180deg'
    })
    
    console.log('trigger')
    
  };

  const arrow = useRef();

  return (
    <div className={styles.acc}>
        <div className={styles.button__wrapper}>
            <button onClick={toggle} type="button">
                <p>{props.title}</p>
                <div className={styles.arrow__wrapper} ref={arrow}>
{/* 
                    <Image src={arrowDown} alt="arrow"/> */}
                    <img src={arrowDown} alt="" />

                </div>
            </button>
            
        </div>
      
      <div className={styles.content} style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
