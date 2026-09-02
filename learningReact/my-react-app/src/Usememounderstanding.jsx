import React from 'react'
// useMemo is a hook that allows you to memoize expensive calculations in functional components. It takes two arguments: a function that returns a value, and an array of dependencies. The function will only be re-evaluated when one of the dependencies has changed. This can help optimize performance by preventing unnecessary recalculations on every render.


const Usememounderstanding = () => {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('John')

  // Memoize a simple value - only recalculates when count changes
  const doubledCount = React.useMemo(() => {
    console.log('Recalculating doubled count...')
    return count * 2
  }, [count])

  return (
    <div>
      <h1>UseMemo Example</h1>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <p>Name: {name}</p>
      
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName(name === 'John' ? 'Jane' : 'John')}>Change Name</button>
    </div>
  )
}

export default Usememounderstanding