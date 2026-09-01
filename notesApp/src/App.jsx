import React, { useState } from 'react'

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
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black'>
      <form action="" className='flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-12 max-w-7xl mx-auto' onSubmit={(e)=> handlesubmit(e)}>
         <div className='flex flex-col gap-4 items-start w-full lg:w-1/2'>
        <label className='text-white text-sm font-semibold'>Note Title</label>
        <input type="text" name="" id="" placeholder='enter notes heading' className='bg-amber-300 hover:bg-amber-400 rounded-2xl px-4 py-3 w-full outline-none font-medium text-slate-900 transition-colors duration-200 shadow-lg' value={title} onChange={(e)=>{handleinput(e)}}/>
        <label className='text-white text-sm font-semibold'>Note Details</label>
        <textarea type="text" name="" id="" placeholder='enter details' className='px-4 py-4 rounded-2xl bg-amber-300 hover:bg-amber-400 w-full outline-none font-medium text-slate-900 transition-colors duration-200 shadow-lg min-h-48 resize-none'value={text} onChange={(e)=>{handletext(e)}} />

        <button className='px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold w-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'>Add Note</button>
  </div>
 
      </form>
 <div className='p-8 lg:p-12 max-w-7xl mx-auto'>
     {issubmitted && (
      task.map((elem,idx)=>{
        return <div  key={idx} className='bg-gradient-to-br from-amber-300 to-amber-400 text-slate-900 p-6 rounded-2xl max-w-md mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105'>
         <h1 className='text-2xl font-bold mb-3 text-slate-800'>{elem.title}</h1>
         <p className='whitespace-pre-wrap text-slate-700 leading-relaxed mb-4'>{elem.text}</p>
         <button onClick={(idx)=>handleDelete(idx)} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md'>Delete</button>
       </div>
      })
      
     )} 
    </div>
    </div>
   


    </>
    

  )
}

export default App