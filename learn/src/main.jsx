
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Navbar from './Navbar.jsx'
createRoot(document.getElementById('root')).render(
    
    <Navbar />
 
)

// 1st thing to do : npm run dev in terminal
// props : arguments passed to the component
//ex: (in vanilla js )=> app();   but  in react we do it like this <App /> and to give props(arguments) we do it like this <App name="John" age={30} /> its is equal to App(fn , ln) in vanilla js
// and in the function we write like this => function App(props) { console.log(props); }  and we can access the props like this props.name and props.age

// props are passed to the component as an object 
// everything in react is a component
// react is a library for building user interfaces
// everything in react is a object
// props can be of any datatype ex : <App({name="John", age=30}) />  and we can access the props like this props.name and props.age
// or  name = "rohit" age={30} basically it should be either "in string" or {in expression}
// whenever we use loops in react we use map function and we use key to identify the element key is basically id so every element in the loop should have a unique key
// we cannot use for loop,while, do while etc inside a return statement 
// insted we use Hofs such as map, filter, reduce etc

