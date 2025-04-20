import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import { CartProvider } from './Context'


import Cart from './Cart'
import Wishlist from './Wishlist'
import First from './First'
import SingleProd from './SingleProd'
import Profile from './Profile'
const router = createBrowserRouter([
    {
        path: '/',
        element: <First />,

        children: [

            {
                index: true,
                element: <Home />,
            },


    {
        path: '/Products',
        element: <Products />,
    },{
        path: '/Cart',
        element: <Cart />,
    },{
        path: '/Wishlist',
        element:<Wishlist />,
    },
    {
        path:'/Profile',
        element:<Profile />,
    },{
        path:"/Products/:id",
        element:<SingleProd />,
    },{
        path:"*",
        element:<div className='text-center text-4xl font-bold text-red-500'>404 Not Found</div>}
]

    },

])
const Main = () => {
  return (
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  )
}
export default Main