import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/auth";
import { addTrailerVideo } from "../utils/movieslice";



const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch();
    
    const trailer = useSelector((store)=> store.movies.trailerList);


    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const trailer = json.results.filter((trailer)=> trailer.name === "Official Trailer")
        dispatch(addTrailerVideo(trailer[0]))
        
      }
    
      useEffect(()=>{
        !trailer && getMovieVideo();
      },[])

}


export default useMovieTrailer;