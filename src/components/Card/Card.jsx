import React from 'react'
import SongCard from '../SongCard/SongCard'
import styles from "./Card.module.css"
function Card() {
  return (
 <div className={styles.card}>
    <div className={styles.album}>
        <div className={styles.topAlbum}>Top Albums
        <SongCard/>
        </div>
        <div className={styles.newAlbum}></div>
    </div>
</div>
  )
}

export default Card