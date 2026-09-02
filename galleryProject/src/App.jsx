import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [data, setdata] = useState([])
const [index, setindex] = useState(1)

const getdata = async()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  setdata(response.data)
}
useEffect(function(){
  getdata()
},[index] )

  return (
    <div className='min-h-screen w-full bg-amber-50 px-6 py-10'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-6 text-center text-4xl font-bold text-amber-900'>Gallery</h1>
       
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.map((elem) => {
            return (
              <a href={elem.url} target="_blank" rel="noopener noreferrer" key={elem.id}>
              <img
                key={elem.id}
                src={elem.download_url}
                alt={`Gallery image by ${elem.author}`}
                className='h-64 w-full rounded-xl object-cover shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl'
              />
              </a>
            )
          })}
        </div>
      </div>
          <div className='mt-10 flex justify-center gap-4'>
            <button onClick={()=>{
              setindex(index-1)
            }} className='rounded-lg bg-amber-900 px-6 py-2 text-white font-semibold hover:bg-amber-800 transition duration-300'>Prev</button>
            <button onClick={()=>{
              setindex(index+1)
            }} className='rounded-lg bg-amber-900 px-6 py-2 text-white font-semibold hover:bg-amber-800 transition duration-300'>Next</button>
          </div>

    </div>
  )
}

export default App