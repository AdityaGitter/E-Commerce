import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
                id="username"
                name="username"
                value={newUsername}
                onChange={e =>setNewUsername(e.target.value)}
                type='text'
                placeholder='Enter your Username'
                autoComplete='username'
                required
                className='border border-gray-500 p-2 rounded-md text-white bg-transparent placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label className='mb-1'>Password</label>
              <input
                id="password"
                value={newPassword}
                onChange={e =>setNewPassword(e.target.value)}
                type='password'
                placeholder='Enter your Password'
                autoComplete='new-password'
                required
                className='border border-gray-500 p-2 rounded-md text-white bg-transparent placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
              />
            </div>
            <div className='flex flex-col relative'>
              <label className='mb-1'>Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='confirm-password'
                autoComplete='new-password'
                placeholder='Confirm your Password'
                value={confirmPassword}
                onChange = {e =>setConfirmPassword(e.target.value)}
                required
                className='border border-gray-500 p-2 rounded-md text-white bg-transparent placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
              /><button
                  type='button'
                  onClick={()=> setShowPassword(!showPassword)}
                  className='absolute right-3 top-2/3 -translate-y-1/2 text-sm text-white underline focus:outline-none'
                  >{showPassword ? 'Hide' : 'Show'}</button>
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
