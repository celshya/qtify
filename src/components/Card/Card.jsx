import React, { useEffect, useState } from 'react'
import SongCard from '../SongCard/SongCard'
import styles from "./Card.module.css"
import axios from 'axios'
import config from '../../config'
let Card =()=> {
 const [topAlbum,setTopAlbum] = useState([])
 const [newAlbum,setNewAlbum] = useState([])

  const performAPIcall =async()=>{
    try{
      let top = await axios.get(`${config.endpoint}/albums/top`)
      setTopAlbum(top.data)
      let latest = await axios.get(`${config.endpoint}/albums/new`)
      setNewAlbum(latest.data)
    }
   catch{
    console.error("Invalid API call");
   }
  }

  useEffect(()=>{
    performAPIcall()
  },[])
 
  return (
 <div className={styles.card}>
    <div className={styles.album}><h3>Top Albums</h3>
        <div className={styles.topAlbum}>
        {topAlbum.map(song => <SongCard xs={12} md={4} key={song.id} song={song} />)}
        </div>   
    </div>
    <div className={styles.album}><h3>New Albums</h3>
        <div className={styles.newAlbum}>
        {newAlbum.map(song => <SongCard key={song.id} song={song} />)}
        </div>   
    </div>
  </div>
  )
}

export default Card