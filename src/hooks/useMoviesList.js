import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/auth'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utils/movieslice'



const useMoviesList = () => {

  const dispatch = useDispatch()

  const getMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
      const json = await data.json(); 
      dispatch(addMovies(json.results)) 
  }

  useEffect(()=>{
    getMovies();
  },[])
}

export default useMoviesList;