import React from 'react'
import { useState } from 'react'

const App = () => {
const [result, setResult] = useState([])

const handleImageClick = (src) => {

  setResult([ src])
}
  
  return (
    <>
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>Image Click Game</h1>
      <p className='text-lg text-center mb-6'>Click on the image and scroll down to see the results</p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> 
        {[
          'https://images.unsplash.com/photo-1744273556970-d5cff25b2b4a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1744132116976-0a68511b70f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1742201876722-85a042294575?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1744124371847-f11bb7bc4714?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1673266633993-013acd448898?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
          'https://images.unsplash.com/photo-1743169450068-5ff12dbfaf13?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1744251286356-65da786e5eee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D'
        ].map((src, index) => (
          <div key={index} className='hover:scale-105 transition-transform duration-300'>
            <img 
              className='w-full h-64 object-cover rounded-lg cursor-pointer shadow-lg'
              src={src} 
              alt="" 
              onClick={() => handleImageClick(src)}
            />
          </div>
        ))}
      </div>

      <div className="result mt-8 flex justify-center flex-wrap gap-4">
     
        {result.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt="" 
            className='w-94 h-94 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App