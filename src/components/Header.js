import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userslice'
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


function Header() {

  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user){ 
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate("/browse")
        } else {
        dispatch(removeUser());
        navigate("/")
       }
    });
    return () => unsubscribe();
  },[])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }


  return (
    <div className='absolute w-screen z-10 px-16 py-6 bg-gradient-to-b from-black flex justify-between'>
        <div>
        <img
         className='w-24'
         alt='logo' 
         src={LOGO} />
         </div>
         {user && <div className='flex'>
         <button onClick={handleGptSearchClick}
          className='py-2 px-4 mr-4 bg-blue-700 text-white rounded-lg'>
          GPT Search
          </button>
         <img
         className='w-7 h-7 mt-1'
         alt='user-icon' 
         src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' 
         />
          <button
          onClick={handleSignOut} 
          className='p-2 mx-2 font-semibold text-white'>
            Sign Out</button>
         </div>}
        
    </div>
  )
}

export default Header