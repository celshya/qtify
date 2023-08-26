import axios from "axios"
import config from './config'

export const fetchTopAlbums =async()=>{
    try{
      let top = await axios.get(`${config.endpoint}/albums/top`)
      return top.data;
     
    }
   catch{
    console.error("Invalid API call");
   }
  }

  export const fetchNewAlbums=async()=>{
    try{
        let latest = await axios.get(`${config.endpoint}/albums/new`)
        return latest.data;
    }
    catch(err){
        console.error("Invalid API call")
    }
   
  }
  export const fetchSongs =async()=>{
    try{
      let top = await axios.get(`${config.endpoint}/songs`)
      return top.data;
     
    }
   catch{
    console.error("Invalid API call");
   }
  }
