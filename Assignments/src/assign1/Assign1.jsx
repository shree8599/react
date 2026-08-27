import React from 'react'

function Assign1() {
  return (
    <>
    <div className='w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-8 text-center shadow-lg'>
      <p className='mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-100'>Assignment 01</p>
      <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Welcome to ReactJs</h1>
    </div>
   <div className='mt-6 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm'>
      <h2 className='text-sm font-medium text-slate-500'>Today's date</h2>
      <p className='mt-1 text-lg font-semibold text-slate-800'>{new Date().toLocaleDateString()}</p>
    </div>
    <div className='mt-6 grid gap-6 md:grid-cols-2'>
    <div className='rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-100 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white shadow-md'>SM</div>
      <h1 className='text-2xl font-bold text-slate-900'>Shree Mandhare</h1>
      <div className='mt-4 space-y-2 text-slate-700'>
        <h3><span className='font-semibold text-indigo-700'>Education:</span> B.C.A</h3>
        <h3><span className='font-semibold text-indigo-700'>Skills:</span> Full stack developer</h3>
      </div>

    </div>

    <div className='rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-100 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <h2 className='text-xl font-bold text-slate-900'>Top courses to pursue in 2026</h2>
      <ol className='mt-5 space-y-3 text-slate-700'>
        <li className='rounded-lg bg-white/70 px-4 py-2 shadow-sm'><span className='mr-2 font-bold text-orange-600'>01</span>AI/ML</li>
        <li className='rounded-lg bg-white/70 px-4 py-2 shadow-sm'><span className='mr-2 font-bold text-orange-600'>02</span>Data Analyst</li>
        <li className='rounded-lg bg-white/70 px-4 py-2 shadow-sm'><span className='mr-2 font-bold text-orange-600'>03</span>DevOps</li>
        <li className='rounded-lg bg-white/70 px-4 py-2 shadow-sm'><span className='mr-2 font-bold text-orange-600'>04</span>Cloud Engineer</li>
        </ol>
    </div>
   </div>
    </>
  )
}

export default Assign1