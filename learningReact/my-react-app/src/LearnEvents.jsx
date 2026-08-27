
  // these is function call for event handling
//    function clickHandler(){
//     alert("hello")
//    }
// const Events = () => {
//   return (
//   <div>
//    <button onClick={clickHandler} >Pressss</button>
//    </div>
//   )
// }

// export default Events



// these is through class method


// export class LearnEvents extends React.Component {
//   clickHandler = () => {
//     alert("hello")
//   }

//   render() {
//     return (
//       <div>
//         <button className='bg-red-500' onClick={this.clickHandler}>Pressss</button>
//       </div>
//     )
//   }
// }

// export default LearnEvents



// through usingsetstate
import React, { Component } from 'react'

class LearnEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message:'learning event handling'
    }
  }

  clickHandler=()=>{
    this.setState({
      message:'when button is clicked the message changes'
    })
  }

  render() {
    return (
      <div className='mb-1.5 p-2'>
        <h1 className='bg-amber-800 inline rounded-2xl ' >{this.state.message}</h1><br />
      <button className='bg-amber-400 p-4 rounded-2xl' onClick={this.clickHandler} >Click to update</button>
    </div>
    )
  }
}

export default LearnEvents