import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
      <div className='bg-purple-200 md:bg-none bg-gradient-to-br from-pink-400 via-purple-400 to-violet-400 flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-between p-6 h-3/4 md:w-2/5 rounded-3xl 
                        bg-gradient-to-br from-pink-400 via-purple-400 to-violet-400
                        text-white md:border-2 border-gray-400'>

          <div className='flex flex-col items-center gap-2'>
            <h1 className='font-bold  flex text-4xl'>Create Your Account!</h1>
            <h2 className='font-bold text-2xl underline'>SIGNUP</h2>
          </div>

          <div className='flex flex-col gap-6 mt-6'>
            <div className='flex flex-col'>
              <label className='mb-1'>New Username</label>
              <input
                type='text'
                placeholder='Enter your Username'
                className='border border-gray-500 p-2 rounded-md text-white bg-transparent placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1'>Password</label>
              <input
                type='password'
                placeholder='Enter your Password'
                className='border border-gray-500 p-2 rounded-md text-white bg-transparent placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1'>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm your Password'
                className='border border-gray-500 p-2 rounded-md text-white bg-transparent placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
              />
            </div>
          </div>

          <div className='flex justify-center mt-4 text-xs'>
            <p>Already have an account?&nbsp;</p>
            <Link to="/login" className='text-blue-900 underline'>Log In</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
