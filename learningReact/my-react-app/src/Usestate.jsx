import React, { Component } from 'react'

 class Usestate extends Component {

constructor(props) {
  super(props)

  this.state = {
     message: "we are learning how to use usestate",
     count:0
  }
}
changeMessage(){
    this.setState({
        message: "updating mesg by using setstate",
        count:this.state.count+1
    })
}


// this os normal method

  // render() {
    
//     return (
//       <div>
//         <h1>{
//              this.state.message}. count: {this.state.count} </h1>
//         <button onClick={() => this.changeMessage()}>
//             Click me
//         </button>
//       </div>
//     )
//   }
// }


// this is done using destructuring
render() {
    const {message,count} = this.state
    return (
      <div>
        <h1>{message}. count: {count} </h1>
        <button onClick={() => this.changeMessage()}>
            Click me
        </button>
      </div>
    )
  }
}
export default Usestate