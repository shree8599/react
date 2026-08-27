import React, { Component } from 'react'

export class Assign2q3 extends Component {

constructor(props) {
  super(props)

  this.state = {
    message:'Hey there'
  }
}


  render() {
    return (
      <div className='mx-auto mt-8 mb-8 flex max-w-xl justify-center rounded-2xl bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 p-8 shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl'>
       <h1 className='text-center text-3xl font-bold tracking-wide text-amber-900 drop-shadow-sm'>
        {this.state.message}
       </h1>
      </div>
    )
  }
}

export default Assign2q3