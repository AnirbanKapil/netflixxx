import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/auth"
import { addPopularMovies } from "../utils/movieslice";
import { useEffect } from "react";


const usePopularMovies = () => {
    
    const dispatch = useDispatch();

    const popularMovies = useSelector((store)=> store.movies.popularMoviesList)

    const getMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results)
        dispatch((addPopularMovies(json.results)));
    }

    useEffect(()=>{
       !popularMovies && getMovies();
    },[])
}

export default usePopularMovies;