import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'



function VideoBackGround({movieId}) {
  
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store)=> store.movies?.trailerList) 
  
  return (
    <div>
      <iframe  src={`https://www.youtube.com/embed/${trailerVideo?.key}`} title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackGround