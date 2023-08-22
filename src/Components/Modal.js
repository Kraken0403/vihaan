// import Image from "next/image"
import right from '../Assets/Images/right.png'
import left from '../Assets/Images/left.png'
import './Modal.scss'

 const Modal = ({ clickedImage, handleRotationRight, setClickedImage, handleRotationLeft }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')){
            setClickedImage(null)
        }
    }
    return <>
        <div className="overlay dismiss" onClick={handleClick}>
            {/* <Image src={clickedImage} alt="hey"/> */}
            <img className='inner__image' src={clickedImage} alt="" />
            {/* <span className="dismiss cross" onClick={handleClick}>
                <Image src={cross}/>
            </span> */}
            <span className="right__arrow" onClick={handleRotationRight}>
                {/* <Image src={right} alt="hey"/> */}
                <img src={right} alt="" />
            </span>
            <span className="left__arrow" onClick={handleRotationLeft}>
                <img src={left} alt="hey"/>
            </span>
        </div>
    </>
 }

 export default Modal