import React, { useReducer } from 'react'
// useReducer is a hook that allows you to manage state in a functional component using a reducer function. It takes two arguments: a reducer function and an initial state. The reducer function takes the current state and an action as arguments and returns a new state based on the action type. The useReducer hook returns an array with two elements: the current state and a dispatch function that allows you to send actions to the reducer.


const UseReducerunderstanding = () => {
  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      case 'RESET':
        return { count: 0 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
   
  )
}

export default UseReducerunderstanding