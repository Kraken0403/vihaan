import React, { useEffect, useState } from 'react';
import styles from './GalleryInner.module.scss';
import { galleryImages } from '../Data';
// import Image from 'next/image';
import InnerHero from '../InnerHero/InnerHero'
import sample from '../../Assets/Images/sample-img.png'
import Container from '../Container/Container';
// import Gallery from "react-grid-gallery";
import Modal from '../Modal';
function GalleryInner() {
    
    const [ tag, setTag ] = useState('all');
    const [ filteredImages, setFilteredImages ] = useState([]);

    const [ clickedImage, setClickedImage ] = useState(null);
    const [ currentIndex, setCurrentIndex ] = useState(null);

    const handleClick = (image, index) => {
        setCurrentIndex(index);
        setClickedImage(image.src);
    }
    
    const handleRotationRight = () => {
        const totalLength = galleryImages.length;

        if(currentIndex + 1 >= totalLength ) {
            setCurrentIndex(0);
            const newUrl = galleryImages[0].src;
            setClickedImage(newUrl);
            return
        }

        const newIndex = currentIndex + 1;
        const newUrl = galleryImages.filter((item) => {
            return galleryImages.indexOf(item) === newIndex
        })

        const newItem = newUrl[0].src;
        setClickedImage(newItem);
        setCurrentIndex(newIndex);
    }

    const handleRotationLeft = () => {
        
        const totalLength = galleryImages.length;

        if(currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = galleryImages[totalLength-1].src;
            setClickedImage(newUrl);
            return
        }

        const newIndex = currentIndex - 1;

        const newUrl = galleryImages.filter((item) => {
            return galleryImages.indexOf(item) === newIndex
        })

        const newItem = newUrl[0].src;
        setClickedImage(newItem);
        setCurrentIndex(newIndex);
    }

    useEffect(()=>{
        tag ==='all' ? setFilteredImages(galleryImages) : setFilteredImages(galleryImages.filter( image => image.tag === tag ))
    }, [tag])

  return (
    <div className={styles.gallery}>
        <InnerHero title="Our Gallery" caption="Gallery" captionTwo="Beautiful Events and Beautiful Pictures"/>
        <Container>
            <div className={styles.category__list}>
                <TagButton name='audio' handleSetTag={setTag} tagActive={ tag === 'audio' ? true: false}/>
                <TagButton name='video' handleSetTag={setTag} tagActive={ tag === 'video' ? true: false}/>
                {/* <TagButton name='sangeet' handleSetTag={setTag} tagActive={ tag === 'sangeet' ? true: false}/>
                <TagButton name='cocktail' handleSetTag={setTag} tagActive={ tag === 'cocktail' ? true: false}/>
                <TagButton name='wedding' handleSetTag={setTag} tagActive={ tag === 'wedding' ? true: false}/>
                <TagButton name='destination weddings' handleSetTag={setTag} tagActive={ tag === 'destination weddings' ? true: false}/>
                <TagButton name='reception' handleSetTag={setTag} tagActive={ tag === 'reception' ? true: false}/> */}
                <TagButton name='all' handleSetTag={setTag} tagActive={ tag === 'all' ? true: false}/>
            </div>
            
            <div className='row'> 

            {filteredImages.map((image, index) => 
                <div key={image.id} className={`${styles.image__box} col-6 col-md-3`} >
                    {/* <Image alt={image.id} src={image.src} onClick={() => handleClick(image, index)}/> */}
                    <img src={sample} alt="" onClick={() => handleClick(image, index)}/>
                </div>
            )} 
            
            </div>
            {/* {clickedImage && (
                <Modal clickedImage={clickedImage} handleRotationRight={handleRotationRight} setClickedImage={setClickedImage} handleRotationLeft={handleRotationLeft}/>
            )}
           */}
        </Container>
    </div>
  )
}

const TagButton = ( {name, handleSetTag, tagActive} ) => {
    return <button className={`tag ${tagActive ? styles.active__tag : null}`} onClick={() => handleSetTag(name)}>{name}</button>
}


export default GalleryInner