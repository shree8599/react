import React from 'react'

const App = () => {
  return (
  
    <div className='h-screen bg-black'>
      <form action="" className='flex  gap-5 items-start p-8'>
         <div className='flex flex-col gap-3 items-start w-1/2  text-black'>
        <input type="text" name="" id="" placeholder='enter notes heading' className='bg-amber-200 rounded-2xl px-3 mt-2 py-3 w-full' />
        <input type="text" name="" id="" placeholder='enter details' className='px-3 py-8 rounded-2xl bg-amber-200  w-full' />

        <button className='px-3 py-2 rounded bg-white text-black w-full'>Add note</button>
  </div>
  <div className='w-1/2 rounded-2xl'>
    <img src="https://i.pinimg.com/736x/1c/37/79/1c3779e366ed363802e4c4d42027d195.jpg" alt="" className='object-contain h-60 w-full ' />
  </div>
      </form>

    </div>

  )
}

export default App