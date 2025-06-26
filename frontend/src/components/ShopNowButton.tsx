import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

interface ShopNowButtonProps {
  onClick?: () => void;
}

const ShopNowButton:React.FC<ShopNowButtonProps> = ({onClick}) => (
    <button
        onClick={onClick}
        className="bg-purple-600 rounded-full px-6 py-3 text-white flex items-center gap-2 hover:bg-purple-700 transition cursor-pointer"
        aria-label='Shop Now'
    ><CiShoppingCart className='text-2xl' aria-hidden="true"/>Shop Now</button>

);

export default ShopNowButton