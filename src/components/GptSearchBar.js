import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import OpenAI from '../utils/openai';

function GptSearchBar() {
  
  const langKey = useSelector((store)=> store.config.language)

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
      console.log(searchText)

      const gptResult = await OpenAI.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResult.choices)
  }

  return (
    <div className='text-center bg-slate-400'>
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
  )
}

export default GptSearchBar