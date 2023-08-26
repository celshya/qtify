import NavBar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import { useEffect,useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css"
import Accordian from "./Accordian/Accordian";


function App({fetchTopAlbums,fetchNewAlbums,fetchSongs}) {
  const [topAlbumData,setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);
  const [songsData,setSongsData] = useState([])


  const generateTopAlbumData=async()=>{
    try{
      const data =  await fetchTopAlbums();
      setTopAlbumData(data)
  
    }
    catch(err){
      console.error(err)
    }

  }

  const generateSongsData=async()=>{
    try{
      const data =  await fetchSongs();
      console.log(data)
      setSongsData(data)
  
    }
    catch(err){
      console.error(err)
    }

  }
 
 
  const generateNewAlbumData=async()=>{
    try{
      const data =  await fetchNewAlbums();
      setNewAlbumData(data)
  
    }
    catch(err){
      console.error(err)
    }

  }

  useEffect(()=>{
    generateTopAlbumData()
    generateNewAlbumData()
    generateSongsData()
  },[])
  return (<>

    <NavBar/>
    <Hero/>
    <div className={styles.sectionWrapper}>
    <Section type="album" title="Top Albums" data={topAlbumData}/>
    <Section type="album" title="New Albums" data={newAlbumData}/>
    <Section type="song" title="Songs" data={songsData}   />
    <Accordian/>
    </div>
  </>)
 }
  


export default App;
