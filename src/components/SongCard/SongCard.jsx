import React from 'react'
import styles from "./SongCard.module.css"
import {
  Card,
  CardMedia,Tooltip
} from "@mui/material";
import { CardActionArea } from '@mui/material';


function SongCard({data,type}) {
  
  switch(type){
    case "album":{
  
      return (
        <div className={styles.songCard} >
        <Tooltip title={`${data.songs.length} songs`} arrow placement="top">
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
          
        </Card></Tooltip>
        <p>{data.title}</p>
        </div>
      )
    }
    case "song":
  
        return (
          <div className={styles.songCard} >
         
          <Card  className={styles.cardtop} sx={{ maxWidth: 159, maxHeight:205}}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="170"
                image={data.image}
                alt="song"
              />
               <div className={styles.cardbutton}><p style={{color:'white'}}>{data.likes} Likes</p></div> 
            </CardActionArea>
            
          </Card>
          <p>{data.title}</p> xdrx
          </div>
        )
            
    default:
    <></>
  }

 
}

export default SongCard