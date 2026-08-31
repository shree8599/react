import React, { useState } from 'react'

const FormHandling = () => {

// these method u handle form through usestate these is called two-way-binding

const handleSubmit=(Event)=>{
  Event.preventDefault()
    alert("form submitted by " + username)
    console.log("form submited by",username)
    setusername('')
    setcomments('')



}
const handleUsername=(Event)=>{
    
    setusername(Event.target.value)


}
const handleComments=(Event)=>{
    setcomments(Event.target.value)

}
const handleTopic=(Event)=>{
    settopic(Event.target.value)

}

const [username, setusername] = useState('')
const [comments, setcomments] = useState('')
const [topic, settopic] = useState('react')


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <form action="" onSubmit={(Event)=>handleSubmit(Event)} className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Contact Form</h2>
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" id="username" value={username} placeholder="Enter your name" onChange={(Event)=>handleUsername(Event)} className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>
            </div>

            <div className="space-y-2">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
              <textarea name="comments" id="comments" placeholder="Enter your comments" value={comments} onChange={(Event)=>handleComments(Event)} className="min-h-28 w-full resize-y rounded-lg border border-gray-300 px-4 py-2 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"></textarea>
            </div>

          <div className="space-y-2">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
          <select id="topic" value={topic} onChange={handleTopic} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vuejs">vuejs</option>
          </select>
          </div>



            <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Submit
            </button>



        </form>
    </div>
  )
}

export default FormHandling