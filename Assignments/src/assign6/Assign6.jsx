import React, { useState } from 'react'
// 1.Create a list of student names using the map() function.
// 2.Display a list of products with price and quantity.
const Assign6 = () => {
  const students = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
  const [isClicked, setIsClicked] = useState(false);
  
  const products = [
    { name: 'Laptop', price: 999.99, quantity: 5 },
    { name: 'Mouse', price: 29.99, quantity: 50 },
    { name: 'Keyboard', price: 79.99, quantity: 30 },
    { name: 'Monitor', price: 299.99, quantity: 15 },
  ];
  
  const handleclick = () => {
    setIsClicked(!isClicked);

  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Student List</h2>
      <ul className="bg-white rounded-lg shadow-md p-4 mb-8">
        {students.map((student, index) => (
          <li key={index} className="py-2 px-4 border-b border-gray-200 hover:bg-blue-50 transition">{student}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">Products</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Product</th>
              <th className="px-6 py-3 text-left font-semibold">Price</th>
              <th className="px-6 py-3 text-left font-semibold">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition">
                <td className="px-6 py-3 text-gray-800">{product.name}</td>
                <td className="px-6 py-3 text-gray-800">${product.price}</td>
                <td className="px-6 py-3 text-gray-800">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className='ptag'>Adding css externally</p>
      <button className='text-2xl p-4 rounded-2xl' onClick={handleclick} style={{backgroundColor: isClicked ? 'blue' : 'gray'}}>hello</button>
    </div>
  )
}

export default Assign6