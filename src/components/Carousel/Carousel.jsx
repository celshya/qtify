import React, { useEffect } from 'react'
import styles from "./Carousel.module.css"
import{useSwiper,SwiperSlide ,Swiper}from "swiper/react"
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import CarouselLeftnavigation from './CarouselLeftNavigation/CarouselLefnavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation'

const Controls=({data})=>{
    const swiper = useSwiper()
    console.log(swiper)
    useEffect(()=>{
      swiper.slideTo(0,500);
    },[data])
    return <></>
}

export const Carousel = ({data,renderCardComponent}) => {
  
  return (
    <div className={styles.wrapper}>
    <Swiper initialSlide={0} modules={{Navigation}} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
    <Controls data={data}/>
    <CarouselLeftnavigation/>
    <CarouselRightNavigation/>
    {
      data.map((item)=>{
        return(
        <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>)
      })
    }
    </Swiper>
    </div>
  )
}
