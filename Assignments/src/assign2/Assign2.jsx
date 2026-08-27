import React from 'react'


// 1.Create a functional component to display employee details.
// 2.Create a functional component that returns multiple JSX elements.
// 3.Create two functional components and reuse one inside another.
// 4.Create a class component that displays user information.
// 5.Create a class component with a constructor.
// 6.Use the render() method to display JSX.

function Assign2() {
  return (
<>
    <div className='flex w-full justify-center py-6'>
        <h1 className='text-center text-3xl font-bold tracking-tight text-slate-800'>Assignment 2</h1>
        </div>


    <div className='mx-auto flex h-fit w-80 flex-col items-center justify-center rounded-3xl border border-amber-100 bg-white p-6 shadow-lg shadow-amber-100/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='mb-4 rounded-full bg-amber-50 p-2'>
      <img className='h-36 w-36 rounded-full object-cover ring-4 ring-white' src="https://i.pinimg.com/736x/94/a6/57/94a6579a62dacdbf36dc358605766ba4.jpg" alt="Mary Jane" />
       </div>
      <h2 className='text-xl font-bold text-slate-800'>Mary Jane</h2>
      <p className='mt-1 text-sm font-medium text-amber-600'>Senior Developer</p>
    </div>
    </>
  )
}

export default Assign2