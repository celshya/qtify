import NavBar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import { useEffect,useState } from "react";
import Section from "./components/Section/Section";
import "./App.module.css"
import Accordian from "./Accordian/Accordian";


function App({fetchTopAlbums,fetchNewAlbums}) {
  const [topAlbumData,setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);


  const generateTopAlbumData=async()=>{
    try{
      const data =  await fetchTopAlbums();
      setTopAlbumData(data)
  
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
  },[])
  return (<>

    <NavBar/>
    <Hero/>
    <div className="sectionWrapper">
    <Section type="album" title="Top Albums" data={topAlbumData}/>
    <Section type="album" title="New Albums" data={newAlbumData}/>
    <Accordian/>
    </div>
  </>)
 }
  


export default App;
