import React from 'react'
import { useState, useEffect } from 'react'    
import { FaRegTrashAlt } from "react-icons/fa";
import './Grocery.css'

const Grocery = () => {

    const formhandler = (e) => {
        e.preventDefault()
   
      
          
            setitems([...items, user])
            setuser('')
            displayadded()
    
        
      
     
    }
    const Toast = ({ message }) => {
        const [isVisible, setIsVisible] = useState(true);
        
        useEffect(() => {
          const timer = setTimeout(() => {
            setIsVisible(false);
          }, 3000);
          return () => clearTimeout(timer);
        }, []);
      
        if (!isVisible) return null;
      
        return (
          <div className="toast" style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem',
            borderRadius: '4px',
            borderbottom: '4px solid #4CAF50',
            fontSize: '16px',
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            opacity: isVisible ? 1 : 0,

            transition: 'opacity 0.3s ease-in-out',
          }}>
            {message}
          </div>
        );
    };

    const [showToast, setShowToast] = useState(false);

    function displayadded() {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    }

    const [user, setuser] = useState('')

    const save = (e) => {
        setuser(e.target.value)
    }

 
    const [items, setitems] = useState([])
   

function del(index) {
    const newitems = items.filter((_, i) => i !== index)
    setitems(newitems)
  }

return (
    <>
    {showToast && <Toast message="Item added successfully!" />}
    <div className='flex flex-col w-full min-h-screen bg-gray-100 p-4'>
            <form onSubmit={(e)=> formhandler(e)} className='w-full max-w-md mx-auto flex gap-2 mb-8'>
                    <input 
                            type="text" 
                            placeholder='Add items' 
                            value={user}
                            onChange={save}
                            className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
                    />
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
                            Add
                    </button>
            </form>
            
            {items.length === 0 ? 
                    <h1 className='text-center text-gray-500 text-xl'>No items</h1> : 
                    <h1 className='text-center text-xl font-semibold mb-4'>Items</h1>
            }
            
            <ul className='max-w-md mx-auto w-full'>
                    {items.map((item, index) => (
                            <div key={index} className='flex items-center justify-between bg-white p-3 rounded-lg mb-2 shadow-sm'>
                                    <li className='text-gray-700'>{item}</li>
                                    <button 
                                            onClick={() => del(index)}
                                            className='text-gray-500 hover:text-red-500 transition-colors'
                                    >
                                            <FaRegTrashAlt />
                                    </button>
                            </div>
                    ))}
            </ul>
    </div>
    </>
)
}

export default Grocery