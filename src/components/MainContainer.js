import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

function MainContainer() {
  
    const movies = useSelector((store)=> store.movies?.moviesList);
    
    if(!movies) return;
    
    const mainMovie = movies[0];
    console.log(mainMovie)

  return (
    <div>
        <VideoTitle />
        <VideoBackGround />
    </div>
  )
}

export default MainContainer