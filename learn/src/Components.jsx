import React from 'react'
import { useState } from 'react'

const Components = () => {
const [a, setfirst] = useState(0)



function changeA() {
  setfirst(60)
    console.log(a)
}




  return (
    <>
    <h1>component</h1>
    <p>value of a is {a}</p>
    <button onClick={changeA}>Change A</button>
    </>
  )
}

export default Components