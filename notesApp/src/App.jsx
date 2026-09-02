import React, { useState } from 'react'
import './App.css'

const App = () => {
const [text, settext] = useState('')
const handletext=(e)=>{
  settext(e.target.value)

}
 


const [title, settitle] = useState('')
const handleinput=(e)=>{
  settitle(e.target.value)
}


const [task, settask] = useState([])
const [issubmitted, setissubmitted] = useState(false)
const [showNote, setshowNote] = useState(true)


const handlesubmit=(e)=>{
e.preventDefault()
const copytask =[...task]
copytask.push({title,text})
settask(copytask)
setissubmitted(true)
settext('')
settitle('')
console.log(issubmitted)

}



const handleDelete=(idx)=>{
const copytask2=[...task]
copytask2.splice(idx,1)
settask(copytask2)
}


  return (
  <>
    <div className='min-h-screen  flex items-start justify-start bg-linear-to-br from-gray-900 via-gray-800 to-black'>
      <div className='w-2/5 p-8 mt-12'>
        <form action="" className='flex flex-col gap-6 bg-gray-800 rounded-2xl shadow-lg p-8' onSubmit={(e)=> handlesubmit(e)}>
           <div className='flex flex-col gap-4 items-start w-full'>
          <label className='text-gray-200 text-sm font-semibold'>Note Title</label>
          <input type="text" name="" id="" placeholder='enter notes heading' className='bg-gray-700 border-2 border-gray-600 hover:border-gray-500 rounded-xl px-4 py-3 w-full outline-none font-medium text-white transition-colors duration-200 focus:border-amber-400' value={title} onChange={(e)=>{handleinput(e)}}/>
          <label className='text-gray-200 text-sm font-semibold'>Note Details</label>
          <textarea type="text" name="" id="" placeholder='enter details' className='px-4 py-4 rounded-xl bg-gray-700 border-2 border-gray-600 hover:border-gray-500 w-full outline-none font-medium text-white transition-colors duration-200 focus:border-amber-400 min-h-48 resize-none'value={text} onChange={(e)=>{handletext(e)}} />

          <button className='px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-bold w-full transition-all duration-200 shadow-md hover:shadow-lg'>Add Note</button>
    </div>
   
        </form>
      </div>
      <div className='w-4/5 p-8 mt-12 overflow-y-auto max-h-screen scrollbar-none flex flex-wrap content-start gap-6 '>
        {issubmitted && (
          task.map((elem,idx)=>{
            return <div  key={idx} className='bg-linear-to-br from-gray-700 to-gray-600 text-white p-6 rounded-2xl w-full shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105'>
             <h1 className='text-2xl font-bold mb-3 text-gray-100'>{elem.title}</h1>
             <p className='whitespace-pre-wrap text-gray-300 leading-relaxed mb-4'>{elem.text}</p>
             <button onClick={()=>handleDelete(idx)} className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md'>Delete</button>
           </div>
          })
          
        )} 
      </div>
    </div>
   


    </>
    

  )
}

export default App