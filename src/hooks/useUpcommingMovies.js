import { useEffect } from "react";
import { API_OPTIONS } from "../utils/auth"
import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../utils/movieslice";

const useUpcommingMovies = () => {
    
    const dispatch = useDispatch();

    const getMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json)
    dispatch(addUpcommingMovies(json.results))
}

    useEffect(()=>{
    getMovies()
    },[])

}

export default useUpcommingMovies;

