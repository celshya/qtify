import React,{useState,useEffect} from 'react'
import {useSwiper} from 'swiper/react';
import {ReactComponent as LeftArrow} from "../../../assets/left.svg"
import styles from "../Carousel.module.css"
const CarouselLeftnavigation = () => {
    const swiper = useSwiper();
    const [isBegining,setIsBegining] =  useState(swiper.isBegining);

    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsBegining(swiper.isBegining)
        })
    },[])

  return (
    <div className={styles.leftNavigation}>
    {
        !isBegining && <LeftArrow onClick={()=>swiper.slidePrev()}/>
    }
 
    </div>
  )
}

export default CarouselLeftnavigation