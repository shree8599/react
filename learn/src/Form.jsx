import React, { useState } from 'react'
import Navbar from './Navbar'

const Form = () => {

const formhandler = (e) => {
e.preventDefault()
console.log('form submitted')
setuser('')



}

const [user, setuser] = useState('')

const save = (e) => {
    setuser(e.target.value)
}




  return (
    <>
    <Navbar />
    <form onSubmit={(e)=>formhandler(e)} >
        <input type="text" value={user}
        onChange={save}/>
        <button>Submit</button>
    </form>
    
    
    </>
  )
}

export default Form