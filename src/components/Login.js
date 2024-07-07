import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';


function Login() {
  
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMsg,setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);  

  const handleButtonClick = () => {
    const msg = checkValidateData(email.current.value,password.current.value)
    setErrorMsg(msg);

    if(msg) return ;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
         const user = userCredential.user;
         updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
          const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        }).catch((error) => {
          setErrorMsg(error.errorMessage)
        });
        console.log(user)
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + "-" + errorMessage)
      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
       const user = userCredential.user;
      
      })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorCode + "-" + errorMessage)
      });
    }
  }
  


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
   

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img className='w-screen h-screen' alt='backGroundImg' src='https://i.pinimg.com/originals/95/ea/f8/95eaf8f43b75d58122081002ebf31d61.jpg'/>
      </div>
      <div className='bg-black'>
        <form className='absolute w-3/12 mt-56 mx-auto right-0 left-0 text-white bg-opacity-80 bg-black rounded-lg' onSubmit={(e)=> e.preventDefault()}> 
          <h1 className='font-bold text-3xl py-4 m-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input
          ref={name}
          type='text' placeholder='Full Name'  
          className='p-2 m-2 w-[300px] bg-gray-700'/>}
          <input 
          ref={email}
          type='text' placeholder='Email Address' 
          className='p-2 m-2 w-[300px] bg-gray-700'/>
          <input
          ref={password} 
          type='password' placeholder='Password' 
          className='p-2 m-2 w-[300px] bg-gray-700'/>
          <p className='m-2 text-red-800 font-semibold'>{`${errorMsg}`}</p>
          <button className='p-3 m-2 mb-6 bg-red-700 text-white rounded-lg w-[300px]' 
          onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='p-2 m-3 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to MyFlix Sign up now" : "Already registered?? Sign In Now"}
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login


