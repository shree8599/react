import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"
import app from '../src/firebase.js'

const auth= getAuth(app);
const Register = () => {

const [formData, setFormData] = useState({
  
  email: '',
  password: ''
})

const handleRegister = (e) => {

  const { name, value } = e.target
  setFormData(()=>
  ({
    ...formData,
    [name]: value
  }))
}
const [message,setMessage]= useState({
    type:'',text:''
})


async function handleSubmit(e){
    e.preventDefault()
    try{
     await createUserWithEmailAndPassword(auth,formData.email,formData.password)
     setMessage({
        type: "success", text: "Registration successful!"
     })
    }
    catch(error){
        setMessage({
            type:"error" , text: error.message
        })
    }
}

  return (
<>
   


<div>
  <form action="" onSubmit={handleSubmit}
   className='flex flex-col gap-4 justify-center items-center border-2 border-black p-4 rounded-md w-md h-lg mx-auto my-10 bg-gray-300'>
   
 {
    message.text && (
        <div className={`mb-4 p-2 text-center rounded ${message.type==='success'? "bg-green-200 text-green-800":"bg-red-200 text-red-800"}`}
            >
            {message.text}

        </div>
    )
 }
    <h2 className='items-center font-bold'>
        Register
    </h2>

    <div className="flex flex-col gap-4 border-1 border-black w-auto h-auto p-2 rounded-xl px-10 bg-gray-50">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"  value={formData.email} onChange={handleRegister} />
    </div>
    <div className="flex flex-col gap-4 border-1 border-black p-2 rounded-xl px-10 bg-gray-50">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"  value={formData.password} onChange={handleRegister}/>
    </div>
    <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Submit</button>
    <div>
    <p>Already have a account <span className='text-blue-500'> <a href=""> signin</a>
    </span></p>
  </div>
  </form>
 
</div>

</>
  )
}
export default Register