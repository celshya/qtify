import React,{useState,useEffect} from 'react'
import {useSwiper} from 'swiper/react';
import {ReactComponent as RightArrow} from "../../../assets/right.svg"
import styles from "../Carousel.module.css"
const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] =  useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsEnd(swiper.isEnd)
        })
    },[])

  return (
    <div className={styles.rightNavigation}>
    {
        !isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>
    }
 
    </div>
  )
}

export default CarouselRightNavigation