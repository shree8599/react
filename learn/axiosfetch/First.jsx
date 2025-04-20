import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'

const First = () => {
  return (
    <>
      <Navbar />
      
      <Outlet />
      <Footer />
    </>
  )
}

export default First