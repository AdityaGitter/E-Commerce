import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

function Home() {
  return (
    <div className='border-3 border-purple-950 p-5 flex'>
        <div className='w-1/2 flex flex-col gap-14 justify-center items-center text-center h-screen'>
            <p className='font-bold text-purple-400 font-serif text-8xl  '>Believes in Comfort!</p>
            <div className='bg-purple-600 rounded-full px-6 py-3 text-white flex items-center gap-2 hover:bg-purple-700 transition cursor-pointer'>
                <CiShoppingCart className='text-2xl'/>
                <button >Shop Now</button>
            </div>
        </div>
        <div className='w-1/2 flex justify-center items-center text-center relative'>
            <div className='bg-purple-300 rounded-full w-100 h-100 absolute z-0'></div>
                <img src='/images/Shoewithotbg.png' alt='shoes' className=' ml-75 relative z-10'/>
        </div>
    </div>
  )
}

export default Home
