import React ,{ useState } from 'react'
import{ NavLink } from 'react-router-dom'
import { FaSearch,FaBars,FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";


function Navbar() {
  const [searchText, setSearchText] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
     <nav className='bg-purple-300 border-1 border-gray-500 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <div className='text-xl font-bold'>
          LOGO
        </div>
          <button className='md:hidden text-2xl' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes/> : <FaBars/>}
          </button>
      </div>
      <div className='bg-white px-3 py-1 rounded-sm w-full flex gap-2 flex-row text-gray-500 md:w-1/3 items-center'>
        <div><FaSearch />
        </div>
        <input 
        type='text'
        placeholder='Search for Products,Brands and More'
        className='outline-none w-full text-black'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
        <ul className={`flex flex-col md:flex-row gap-3 md:gap-8 text-center w-full md:w-auto px-20 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
            <li><NavLink to="/Login" className={({ isActive }) => isActive ? 'text-purple-500' : 'text-black'}>LogIn</NavLink></li>
            <li className='text-2xl pt-0.5 flex justify-center'><NavLink to="/cart" className={({ isActive })=> isActive ? 'text-purple-500' : 'text-black'}><IoMdCart /></NavLink></li>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>Home</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>Shop</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}>Contact</NavLink></li>
            <li className='text-2xl pt-0.5 flex justify-center'><NavLink to="/profile" className={({ isActive }) => isActive ? 'text-purple-500': 'text-black'}><VscAccount  /></NavLink></li>    
        </ul>

    </nav> 
    </>
  )
}

export default Navbar
