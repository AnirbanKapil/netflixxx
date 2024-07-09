import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/auth'


function VideoBackGround({movieId}) {

  const [trailerId,setTrailerId] = useState(null)
  
  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    console.log(json)
    const trailer = json.results.filter((trailer)=> trailer.name === "Official Trailer")
    console.log(trailer);
    setTrailerId(trailer.key)
  }

  useEffect(()=>{
    getMovieVideo();
  },[])
  
  return (
    <div>
      <iframe  src={`https://www.youtube.com/embed/${trailerId}?si=44Q0Zd94maSzyoKI`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackGround