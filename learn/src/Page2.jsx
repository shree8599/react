import React from 'react'
import Page3 from './Page3'

const Page2 = () => {
  return (
    <>
    <div className='page2 w-full h-screen mt-2 flex flex-col md:flex-row mb-2'>
        <div className='left w-full md:w-1/2 h-1/2 md:h-full object-cover z-10 relative'>
            <img  className="h-full w-full p-4 inset-0 object-cover absolute md:left-10 rounded-md"    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
        </div>
        <div className="right w-full md:w-1/2 h-1/2 md:h-full flex bg-gray-300 justify-center p-4 md:p-10 items-center flex-col gap-4 z-0 relative">
            <p className='p1 text-xl md:text-3xl font-bold text-center md:text-left p-4 md:p-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.cjhscuscsjxxj sjcsicjskcscks jhsuchscns uhwuhdxs . </p>
            <p className='p2 text-sm md:text-base text-center md:text-left p-4 md:p-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nam ipsam veniam, cum velit praesentium repudiandae repellendus harum similique itaque debitis labore ipsum facilis omnis soluta doloremque rerum? Aut, nisi.</p>
            <button className='p-2 px-4 md:px-6 rounded-xl text-xl md:text-2xl bg-blue-700 text-white'>Get in Touch </button>
        </div>
    </div>
    <Page3 />
    </>
  )
}

export default Page2