import React from 'react'
import Page2 from './Page2'

const Page1 = () => {
  return (
    <>
    <div className='page1 relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] w-full bg-cover h-screen bg-center bg-no-repeat'>  
   
        <div className='find z-10 justify-center items-center flex flex-col h-full'>
        <h1 className='text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-extrabold absolute top-46 left-15'>Let us find your</h1>
        <h1 className='text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold absolute top-62 left-18 text-rose-700'>Favourite Food</h1>
        <p className='text-xl md:text-lg sm:text-base xs:text-sm absolute top-75 left-15'>We are here to help you find your favourite food</p>
        <div className='absolute top-90 left-15 flex gap-4 md:gap-2  sm:gap-2'>
        <button className='bg-rose-700 text-amber-50 text-3xl md:text-2xl sm:text-xl p-2 rounded-md'>Search now</button>
        <button className='text-3xl md:text-2xl sm:text-xl p-2 rounded-md bg-white text-rose-700'>Know more</button>
        </div>
        </div>
       
            </div>
            <Page2 />
    </>
  )
}
export default Page1
