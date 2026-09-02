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
     
        {Array.isArray(data) && data.map((item) => {
          return <img key={item.id} src={item.url} alt={item.download_url} style={{ width: '100px', height: '100px', margin: '10px' }} />
        })}
      </div>
  
  )
}

export default Apicall