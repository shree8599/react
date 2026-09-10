import { useState } from 'react'
import axios from 'axios'



// api calling through fetch method (old way)
// const getdata = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log(await data.json())
// }

// const getdata = async () => {
//     // const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//     //  console.log(response.data)
//      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
//      console.log(data) // same just .. done with destructuring

// }

const Apicall = () => {
  const [data, setdata] = useState([])
  
  const getdata = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10')
      setdata(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
     
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {data.map((item) => (
          <div key={item.id} className='border p-2'>
            <img src={item.download_url} alt={item.author} className='w-full h-auto' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Apicall