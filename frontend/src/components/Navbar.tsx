import React from 'react'
import{ NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav className='border-2 border-gray-500 p-4'>
        <ul className="flex gap-8 justify-center">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>Home</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>Shop</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>Contact</NavLink></li>    
        </ul>    
    </nav> 
    </>
  )
}

export default Navbar
