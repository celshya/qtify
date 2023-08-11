import React from 'react'
import styles from "./Hero.module.css"
import headphone from "../../assets/headphone.png"
const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroWrapper}>
            <div className={styles.text}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
            </div>
            <img src={headphone} alt="hero" className={styles.heroImage}/>
        </div>

    </div>
    
  )
}

export default Hero