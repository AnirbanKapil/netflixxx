import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate()


  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen z-10 px-16 py-6 bg-gradient-to-b from-black flex justify-between'>
        <div>
        <img
         className='w-40'
         alt='icon' 
         src='https://myflix-platform.vercel.app/assets/myflix-logo.png' />
         </div>
         <div className='flex'>
         <img
         className='w-7 h-7 mt-4'
         alt='user-icon' 
         src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' 
         />
          <button
          onClick={handleSignOut} 
          className='p-2 m-2 font-semibold'>
            Sign Out</button>
         </div>
        
    </div>
  )
}

export default Header