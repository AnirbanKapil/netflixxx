import React from 'react'
import lang from '../utils/languageConstants'

function GptSearchBar() {
  return (
    <div className='text-center bg-slate-400'>
        <div className='pt-[20%]'>
        <form className='m-8 p-4 pt-16'>
          <input
          className='p-2 w-3/4 border border-solid '
          type='text'
          placeholder={lang.hindi.gptSearchPlaceHolder}
          />
          <button className='align-middle m-4 p-2 bg-blue-800 text-white rounded-lg'>{lang.hindi.search}</button>
        </form>
        </div>
    </div>
  )
}

export default GptSearchBar