import React from 'react'

function LogIn() {
  return (
    <>
      <div className='bg-purple-200 flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-start items-center gap-16 p-6 h-3/4 w-1/3 rounded-3xl 
                        bg-gradient-to-br from-pink-400 via-purple-400 to-violet-400
                        text-white border-2 border-gray-400'>
          <h1 className='font-bold text-3xl text-white'>LogIn</h1>
          <div className='flex flex-row gap-8 pt-16 w-full'>
            <p className='flex justify-center items-center'>Username</p>
            <input
              type='text'
              placeholder='Enter your Username'
              className='border border-gray-400 w-full p-2 rounded-md text-white placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none '
            />
          </div>
          <div className='flex flex-row gap-8 w-full'>
            <p className='flex justify-center items-center'>Password</p>
            <input
              type='text'
              placeholder='Enter your Password'
              className='border border-gray-400 w-full p-2 rounded-md text-white placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
