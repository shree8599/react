
import './App.css'
import Learn from './Learn.jsx'
import Classcomponent from './classcomponent.jsx'
import Styles from './appstyle.module.css'
import Usestate from './Usestate.jsx'
import Events from './LearnEvents.jsx'

import Child from '../destructuring/Child.jsx'
import FormHandling from './FormHandling.jsx'
import Lifecycle from './Lifecycle.jsx'
import Playground from './Playground.jsx'
import UseEffectunderstanding from './UseEffectunderstanding.jsx'
import UseContextunderstanding from './UseContextunderstanding.jsx'
import UseReducerunderstanding from './UseReducerunderstanding.jsx'
import Usememounderstanding from './Usememounderstanding.jsx'
import Storage from './Storage.jsx'
import Apicall from './Apicall.jsx'




function App() {
  const user = {
    name: "John",
    age: 25,
    city: "Singapore",
  };

  return (
    <div className=' text-black text-2xl w-full text-center p-5 ' style={{background:'lightpink'}}>
    {/* <Classcomponent />
      <Learn />
     <Usestate />
     <Events />
    
      <h1 className='parent'>Parent Component</h1>

      <Child user={user} />

      <h1 className={Styles.success}>applying through module css</h1>
      <FormHandling />
      <Lifecycle />
      <Playground />
      <UseEffectunderstanding />
      <UseContextunderstanding />
      <UseReducerunderstanding />
      <Usememounderstanding /> */}
    
  <Storage />
  <Apicall />
  
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
