import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'

const Login = () => {

  const email = useRef(null)
  const password = useRef(null)

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm)
  }

  const handleButtonCLick = () => {

    console.log(email.current.value)
    console.log(password.current.value)

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message)

    console.log(message)

  }

  return (
    <div className='bg-black sm:bg-herobg w-full h-fit py-10 md:py-20 font-[segoe ui]'>
      <div className="bg-black md:w-[450px] h-fit mx-auto px-5 md:px-16 py-8 md:py-10 opacity-85 flex flex-col gap-5 rounded-[7px]">
        <header className="text-white text-[2rem] font-bold py-2" >{isSignInForm ? "Sign In" : "Sign Up"}</header>
        <form onSubmit={(e) => { e.preventDefault() }} action="" className='flex flex-col gap-y-5'>
          {!isSignInForm && (<input type="text" placeholder='Username' className='bg-zinc-950 h-14 w-full border-[0.85px] border-gray-500 rounded-[3px] px-4 text-white' />)}
          <input ref={email} type="text" placeholder='Email or phone number' className='bg-zinc-950 h-14 w-full border-[0.85px] border-gray-500 rounded-[3px] px-4 text-white' />
          <input ref={password} type="password" placeholder='Password' className='bg-zinc-950 h-14 w-full border-[0.85px] border-gray-500 rounded-[3px] px-4 text-white' />
          <p className='text-red-600 text-xs'>{errorMessage}</p>
          <button className='bg-red-600 h-10 w-full rounded-[5px] px-4 text-white font-semibold' onClick={handleButtonCLick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        </form>
        <p className='text-center text-gray-300'>OR</p>
        <button className='bg-zinc-700 h-10 w-full rounded-[5px] px-4 text-white font-semibold'>{isSignInForm ? "Use a sign in code" : "Use a sign up code"}</button>
        <p className='text-center text-gray-100 '>Forgot Password ?</p>
        <div className='flex gap-3 items-center'>
          <input type="checkbox" className='text-white h-4 w-4' />
          <label className='text-white'>Remember Me</label>
        </div>
        <p className='text-gray-400 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign in now."}</p>
        <p className='text-gray-400 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-700'>Learn more.</span></p>
      </div>
    </div>
  )
}

export default Login