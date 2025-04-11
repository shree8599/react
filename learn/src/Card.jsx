import React from 'react'
import CardDiv from './CardDiv';

const Card = () => {
    const people = [
        {
          name: "John Doe",
          photo: "https://example.com/photo1.jpg",
          age: 30,
          profession: "Software Engineer"
        },
        {
          name: "Jane Smith",
          photo: "https://example.com/photo2.jpg",
          age: 25,
          profession: "Doctor"
        },
        {
          name: "Alice Johnson",
          photo: "https://example.com/photo3.jpg",
          age: 35,
          profession: "Teacher"
        },
        {
          name: "Bob Brown",
          photo: "https://example.com/photo4.jpg",
          age: 40,
          profession: "Artist"
        },
        {
            name: "ryam yellow",
            photo: "https://example.com/photo5.jpg",
            age: 40,
            profession: "Artist"
          },

          {
            name: "sahil green",
            photo: "https://example.com/photo6.jpg",
            age: 40,
            profession: "Artist"
          }






      ];
      
  return (
    people.map((person) => {
      return (
        <CardDiv user={person.name} photo={person.photo} age={
person.age} profession={person.profession} key={person.name
        } />
      )
    })
  )   
}

export default Card