import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CartContext } from './Context';

const Navbar = () => {
  const {cart}=  useContext(CartContext)
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary flex justify-between bg-black p-4'>
        <h1 className='text-4xl font-bold text-orange-400'>Trendify</h1>
        <div className="flex text-2xl font-bold text-white gap-4 mr-5">
          <Link className=' hover:text-blue-400' to="/">home</Link>
          <Link className=' hover:text-blue-400' to="/Products">products</Link>
       
          <Link to="/Contact"></Link>
          <Link className='mt-2 hover:text-rose-600 ' to="/Wishlist"><FaRegHeart />

              </Link>

          <Link className='mt-2 hover:text-blue-400 relative' to="/Cart"><PiShoppingCartBold />
          <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
                {cart.length}
              </span>
          </Link>
          <Link className='mt-2  hover:text-blue-400' to="/Profile"><CgProfile /></Link>
      
        </div>
      </nav>
    </div>
  )
}

export default Navbar