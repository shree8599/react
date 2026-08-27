

import './App.css'
import Learn from './Learn.jsx'
import Classcomponent from './classcomponent.jsx'
import Props from './Props.jsx'
import Usestate from './Usestate.jsx'
import Events from './LearnEvents.jsx'

import Child from '../destructuring/Child.jsx'



function App() {
  const user = {
    name: "John",
    age: 25,
    city: "Singapore",
  };
 

  return (
    <div className=' text-black text-2xl w-full text-center p-5 '>
    <Classcomponent />
      <Learn />
     <Usestate />
     <Events />
    
      <h1>Parent Component</h1>

      <Child user={user} />
  
</div>

  
  )
}


export default App












// function App() {
//   const user = {
//     name: "John",
//     age: 25,
//     city: "Singapore",
//   };

//   return (
//     <div className="text-black text-2xl w-full text-center p-5">
//       <h1>Parent Component</h1>

//       <Child user={user} />
//     </div>
//   );
// }

// export default App;
