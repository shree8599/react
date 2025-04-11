import { useState } from "react";

function Counter1 (){
    const [counter,setCounter] = useState(0)
    function increment(){
        setCounter(counter+1)

    }
    function decrement(){
        if (counter>0) setCounter(counter-1)
    }

    return(
        <>
          <h1>counter app</h1>
          <button onClick={increment}>increment</button>
          <p>{counter}</p>
          <button onClick={decrement}>Decrement</button>
  
        </>
    )
}
export default Counter1;