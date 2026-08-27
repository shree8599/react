

// 1.Create a component that receives props and displays product details.
// 2.Pass multiple props from parent to child component.
// 3.Use props to display dynamic data in React.
// 4.Create a class component that uses state to store a counter value.
// 5.Update state using setState() on button click.
// 6.Create a component that changes text based on state value.
import React, { Component } from 'react'

export class Assign3 extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count: 0
      }
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 })
    }

  render() {
    const { image, productName, productPrice,productDescription } = this.props

    return (
        
      <div className='group mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-50 via-amber-100 to-orange-200 shadow-lg shadow-orange-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-md md:max-w-lg lg:max-w-xl'>
       
        <div className='relative flex h-48 w-full items-center justify-center overflow-hidden bg-white/60 p-3 sm:h-56 sm:p-4 md:h-64'>
          <div className='absolute inset-3 rounded-xl bg-linear-to-br from-white/70 to-orange-100/30 sm:inset-4' />
          <img className='relative z-10 h-full w-full rounded-xl object-contain p-2 transition duration-500 group-hover:scale-105 sm:p-3' src={image} alt={productName} />
        </div>
        <div className='flex flex-1 flex-col p-4 sm:p-5 md:p-6'>
          <h3 className='mb-2 text-lg font-bold tracking-tight text-slate-800 sm:text-xl md:text-2xl'>{productName}</h3>
          <p className='mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 sm:text-base'>{productDescription}</p>
          <p className='mb-4 text-xl font-extrabold text-orange-700 sm:text-2xl'>${productPrice}</p>
          <p className='mb-3 flex items-center text-sm font-medium text-slate-700'>
              <span className={`mr-2 inline-block h-2 w-2 rounded-full ${this.state.count > 0 ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
              {this.state.count > 0 ? 'Added to cart' : 'Nothing Added'}
            </p>
            <button className='mt-auto w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white shadow-md shadow-slate-900/20 transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 sm:text-base' onClick={this.increment}>Add to Cart <span className='ml-1 rounded-full bg-white/20 px-2 py-1'>{this.state.count}</span></button>
        </div>

      </div>
    )
  }
}

export default Assign3