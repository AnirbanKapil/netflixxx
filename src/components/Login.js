import React from 'react'
import Header from './Header'

function Login() {
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img className='w-full h-screen' alt='backGroundImg' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs'/>
      </div>
      <div>
        <form className='absolute w-3/12 mt-56 mx-auto right-0 left-0 text-white bg-opacity-35'> 
          <h1 className='font-bold text-3xl py-4'>Sign In</h1>
          <input type='text' placeholder='Email Address' 
          className='p-2 m-2 w-full bg-gray-700'/>
          <input type='password' placeholder='Password' 
          className='p-2 m-2 w-full bg-gray-700'/>
          <button className='p-4 m-4 bg-red-700 text-white rounded-lg w-full'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login

