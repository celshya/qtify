import React from 'react'
import styles from "./SongCard.module.css"
import {
  Card,
  CardMedia,
} from "@mui/material";
import { CardActionArea } from '@mui/material';


function SongCard({data,type}) {

  return (
    <div className={styles.songCard}>
    <Card  className={styles.cardtop} sx={{ maxWidth: 159, maxHeight:205}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="170"
          image={data.image}
          alt="song"
        />
         <div className={styles.cardbutton}><p style={{color:'white'}}>{data.follows} Follows</p></div> 
      </CardActionArea>
      
    </Card>
    <p>{data.title}</p>
    </div>
  )
}

export default SongCard