



// 1.Create a React component with a button that displays a message on click.
// 2.Handle a click event to increase a counter value.
// 3.Create an input field and display the typed value using an event handler.






import React, { Component } from 'react'

export class Assign4 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count:0,
          value:''
       }
     }
    
     eventhandle(){

    this.setState({
        count:this.state.count+1
        

    })   
}
valuehandler(event){
    this.setState({
    value: event.target.value
    })
}

  render() {
    const { count, value } = this.state
    return (
      
 <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-indigo-900 p-6'>
   <div className='flex w-full max-w-md flex-col gap-5 rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-md'>
    <h1 className='rounded-2xl bg-linear-to-r from-amber-300 to-orange-400 p-3 text-center text-2xl font-extrabold tracking-wide text-slate-900 shadow-lg'>Assign4</h1>
    <div className='rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center shadow-inner'>
      <p className='text-sm font-medium uppercase tracking-[0.25em] text-blue-200'>Current count</p>
      <h1 className='mt-1 text-4xl font-bold text-white'>{count}</h1>
    </div>
  <button onClick={()=>this.eventhandle()} className='w-full rounded-2xl bg-blue-600 p-3 text-lg font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/40 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50'>
        Click me
    </button>
    <div className='space-y-2'>
      <label htmlFor='assign4-input' className='block text-sm font-semibold text-blue-100'>Type something</label>
      <input id='assign4-input' placeholder='Type here...' className='w-full rounded-2xl border border-white/20 bg-slate-950/70 p-3 text-center text-lg text-white outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20' type='text' value={value} onChange={(event)=>this.valuehandler(event)} />
    </div>
    <p className='min-h-12 wrap-break-words rounded-2xl bg-white/10 p-3 text-center text-slate-100'>Typed value: <span className='font-semibold text-amber-300'>{value || '—'}</span></p>
   </div>
    </div>
      
    )
  }
}

export default Assign4