import React, { use, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { CartContext } from './Context'



const SingleProd = () => {
   const {handleCart} = useContext(CartContext)
const { id } = useParams()
const [data, setData] = React.useState(null);
const [error, setError] = React.useState(null);

useEffect(() => {
    fetchData()
}, [id])


function fetchData() {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err.message);
        });
}

return (
    <div className='flex flex-col justify-center items-center'>
        {error ? (
            <div>Error: {error}</div>
        ) : (
            data && (
                <div className='container max-h-[600px] border-0 flex justify-center rounded-2xl m-5 p-5 mb-2.5 bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out'>
                    <div className='img w-1/2 max-h-[500px] object-contain mb-2 justify-center mx-auto'>
                        <img src={data.image} alt={data.title} className='h-full w-full object-contain' />
                    </div>
                    <div className="w-1/2 max-h-[500px] flex flex-col justify-center items-start p-5 bg-gray-100 rounded-2xl">
                        <h2 className='text-2xl font-bold'>{data.title}</h2>
                        <p className='price font-extrabold text-xl mb-2'>${data.price}</p>
                        <p className='overflow-y-auto'>{data.description}</p>
                        <div className='flex flex-row gap-3 mt-2 items-center w-full'>
                            <button onClick={()=> handleCart(data)} className='bg-black text-white p-2 rounded-xl'>Add to cart</button>
                            <button className='bg-rose-600 text-white p-2 rounded-xl'>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            )
        )}
    </div>
)
}

export default SingleProd;