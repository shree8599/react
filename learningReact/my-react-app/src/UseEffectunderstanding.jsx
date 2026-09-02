import React, { useEffect, useState } from 'react'

// useEffect is a hook that allows you to perform side effects in function components. It takes two arguments: a function that contains the side effect code, and an optional array of dependencies that determine when the effect should run. If the array is empty, the effect will only run once after the initial render. If the array contains variables, the effect will run whenever those variables change.


const UseEffectunderstanding = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  // Runs only once after initial render (empty dependency array)
  useEffect(() => {
    console.log('Component mounted')
  }, [])

  // Runs whenever 'count' changes
  useEffect(() => {
    console.log('Count changed:', count)
  }, [count])

  // Runs whenever 'name' changes
  useEffect(() => {
    console.log('Name changed:', name)
  }, [name])

  // Runs on every render (no dependency array)
  useEffect(() => {
    console.log('Component rendered')
  })

  // Cleanup function example
  useEffect(() => {
    console.log('Setting up listener')
    return () => {
      console.log('Cleaning up listener')
    }
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName(name === 'John' ? 'Jane' : 'John')}>Toggle Name</button>
    </div>
  )
}

export default UseEffectunderstanding