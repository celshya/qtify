import React from 'react'
import styles from "./SongCard.module.css"
import {
  Card,
  CardMedia,
} from "@mui/material";
import { CardActionArea } from '@mui/material';
import song from "../../assets/song.png"

function SongCard() {
  return (
    <div className={styles.songCard}>
    <Card  className={styles.cardtop} sx={{ maxWidth: 159, maxHeight:205}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="170"
          image={song}
          alt="song"
        />
         <div className={styles.cardbutton}><p style={{color:'white'}}>100M Follows</p></div> 
      </CardActionArea>
      
    </Card>
    <p>New Bollywood</p>
    </div>
  )
}

export default SongCard