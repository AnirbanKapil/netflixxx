import React, { useRef} from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/auth'
import { addSearchMovies } from '../utils/gptSlice'



function GptSearchBar() {
  
  const dispatch = useDispatch();
  const langKey = useSelector((store)=> store.config.language)
  
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
      fetchSearchMovie();
      
  }

  const fetchSearchMovie = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addSearchMovies(json.results))
  }

  return (
    <>
    <div className='text-center'>
        <div className='pt-[20%]'>
        <form className='m-8 p-4 pt-16' onSubmit={(e)=> e.preventDefault()}>
          <input
          ref={searchText}
          className='p-2 w-3/4 border border-solid '
          type='text'
          placeholder={lang[langKey].gptSearchPlaceHolder}
          />
          <button className='align-middle m-4 p-2 bg-blue-800 text-white rounded-lg'
          onClick={handleGptSearchClick}>
            {lang[langKey].search}</button>
        </form>
        </div>
        </div>
   </>
  )
}

export default GptSearchBar