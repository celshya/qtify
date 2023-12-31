import { CircularProgress } from '@mui/material'
import React from 'react'
import {useState} from "react"
import styles from "./Section.module.css"
import SongCard from '../SongCard/SongCard'
import { Carousel } from '../Carousel/Carousel'
import BasicTab from '../../BasicTab/BasicTab'

const Section = ({type,title,data,value,handleChange}) => {
    
    const [carouselToggle,setcorouseltoggle]=useState(true)
    const handleToggle=()=>{
        setcorouseltoggle(!carouselToggle)
        
    }
  return (
    <div >
    <div className={styles.header}>
    <h3>{title}</h3>
    <h4 className={styles.toggleText} onClick={handleToggle}>{carouselToggle?"show All":"collapse All"}</h4>

    </div>
    
    {type==="song"?<BasicTab value={value} handleChange={handleChange}/>:null}
    {
        data?.length===0 ? (<CircularProgress/>):(
            <div className={styles.cardWrapper}>
            {!carouselToggle ?(
                <div className={styles.wrapper}>{
                    data.map((ele)=>{
                        return (<SongCard data={ele} type={type} key={ele.id}/>)
                    })
                }</div>
                ):(

                    <Carousel data={data} renderCardComponent={(data)=><SongCard data={data} type={type}/>}/>
                )
            }

        </div>)
    }


    </div>
  )
}

export default Section