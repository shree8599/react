import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

const Divs = () => {
useEffect(() => {
    fetchData()
}, [])

const [data, setData] = useState([]);

const [error, setError] = useState(null);

async function fetchData() {
    try {
        const result = await axios.get('https://fakestoreapi.com/products');
        console.log(result.data);
        setData(result.data);
    } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
    }
}

return (
    <div className='flex flex-wrap justify-center'>
        {error ? (
            <div>Error: {error}</div>
        ) : (
            data.map((item) => (
                <div key={item.id} className='container w-100 h-100 border-0 flex flex-col justify-center rounded-2xl m-5 p-5 mb-2.5 bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out'>
                    <div className='img w-30 h-auto object-cover mb-2 justify-center mx-auto'>
                    <Link to={`/Products/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                    </Link>
                    </div>
                    <div className='text-center text-xl mt-5 '>
                        <h2>{item.title}</h2>
                        <p className='price font-extrabold'>${item.price}</p>
                       

                    </div>
                   
                </div>
            ))
        )}
    </div>
)
}

export default Divs