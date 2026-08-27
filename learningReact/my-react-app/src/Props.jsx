import {Greet} from "./Greet";  
// open greet file to see how props work


// import React from 'react'

// const Props = () => {
//   return (
//     <div>
//         <Greet name="shree" role="sde3"><h1>hello there this a props children</h1><br /> </Greet>

// <Greet name="medha" role="sde2"><h1>hello there this a props children2</h1> <br /></Greet>
// <Greet name="purva" role="biotech eng"><h1>hello there this a props children3</h1><br /> </Greet>
// <Greet name="sagar" role="webdev"> </Greet>
//     </div>
//   )
// }

// export default Props

import React, { Component } from 'react'

export class Props extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parent:"shree"
    }
  }
greethandler=()=>{
  alert(`hello ${this.state.parent}`)
}




  render() {
    return (
     <Greet classname='bg-green-500' greethandler={this.greethandler} />
    )
  }
}

export default Props

