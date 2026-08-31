
import './App.css'
import Learn from './Learn.jsx'
import Classcomponent from './classcomponent.jsx'
import Styles from './appstyle.module.css'
import Usestate from './Usestate.jsx'
import Events from './LearnEvents.jsx'

import Child from '../destructuring/Child.jsx'
import FormHandling from './FormHandling.jsx'



function App() {
  const user = {
    name: "John",
    age: 25,
    city: "Singapore",
  };
 

  return (
    <div className=' text-black text-2xl w-full text-center p-5 ' style={{background:'lightpink'}}>
    <Classcomponent />
      <Learn />
     <Usestate />
     <Events />
    
      <h1 className='parent'>Parent Component</h1>

      <Child user={user} />

      <h1 className={Styles.success}>applying through module css</h1>
      <FormHandling />
  
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
