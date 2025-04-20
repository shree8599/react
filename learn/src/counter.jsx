import { useState } from "react";

function Counter (){
    const [counter,setCounter] = useState(0)

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const increment = debounce(() => {
        setCounter(counter + 1);
    }, 300);

    const decrement = debounce(() => {
        if (counter > 0) setCounter(counter - 1);
    }, 300);

    return(
        <>
          <h1>counter app</h1>
          <button onClick={increment}>increment</button>
          <p>{counter}</p>
          <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default Counter;