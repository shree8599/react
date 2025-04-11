import React from 'react'
import Page1 from './Page1'

const Navbar = () => {
  return (
    <>
      <nav className='navbar text-2xl gap-2 flex justify-between items-center p-2 mb-2 '>
          <h1>GeekFoods</h1>
          <div className='links flex gap-4 '>
            <h2 className='text-blue-600'>Home</h2>
            <h2 className='hover:text-blue-600'>Qoute</h2>
            <h2 className='hover:text-blue-600'>Restaurants</h2>
            <h2 className='hover:text-blue-600'>Foods</h2>
            <h2 className='hover:text-blue-600'>Contact</h2>
            </div>
          <button className='bg-blue-600 p-2 rounded-md text-amber-50'>Get started</button>
      </nav>

     <Page1 />
    </>
  )
}

export default Navbar