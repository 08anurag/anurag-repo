import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from "../utils/constants"
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(()=> {
    getVideos();
  }, [])

  const getVideos = async()=> {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    console.log(jsonData);
    console.log("jdfdj");
    setVideos(jsonData.items);
  }
  return (
    <div className='flex flex-wrap'>
    {videos.length>0? (
      videos.map((items)=> {
        return <Link to={"/watch?v="+items.id}><VideoCard key={items.id} info ={items}/></Link>
      })
    ): <p>Loading</p>}
      
    </div>
  )
}

export default VideoContainer
