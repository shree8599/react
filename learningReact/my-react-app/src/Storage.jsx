import React from 'react'

const Storage = () => {
    localStorage.setItem('name', 'John Doe');
    localStorage.setItem('age','80') // store data in local storage
    localStorage.removeItem('name') // remove a specific item from local storage
    localStorage.clear() // remove all items from local storage
    // recive data from local storage by using getItem method inside the component
    const name = localStorage.getItem('name'); // to get item 
    console.log(name); 
    const age = localStorage.getItem('age'); 
    console.log(age)

// session storage
sessionStorage.setItem('name', 'shree mandhare');
const sessionName = sessionStorage.getItem('name');
console.log(sessionName);
sessionStorage.removeItem('name'); // remove a specific item from session storage
sessionStorage.clear(); // remove all items from session storage

// diff btw local storage and session storage
// local storage data is persistent and will remain even after the browser is closed, while session storage data is temporary and will be cleared when the browser session ends.

const user ={
    name:'shree',
    age:'22',
    location:'pune'
}

localStorage.setItem('user',JSON.stringify(user)); // store object in local storage and
// JSON.stringify is used to convert a object into string

const user1 =localStorage.getItem('user')
console.log( user1)
console.log(typeof user1) // gives typeof

// if u want to reverse it i.e from string to object use JSON.parse
const user2 = JSON.parse(localStorage.getItem('user'))
console.log(user2)
console.log(typeof user2)












  return (
    <div>
        app storage  
      
    </div>
  )
}

export default Storage