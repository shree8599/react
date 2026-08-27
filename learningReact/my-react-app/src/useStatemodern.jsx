import React, { useState } from 'react'

const useStatemodern = () => {

function handleCounter(){
	setCount(Counter+1)
}

const changeO =()=>{
	const newNum ={...nameO}
	newNum.name='purva'
	newNum.age='23'
	setnameO(newNum)
}


const arrayChange=()=>{
	const newArr=[...num]
	newArr.push(99)
	setnum(newArr)
}
 const batchUpdate=()=>{
	setupdate(prev=>(prev+1))
		setupdate(prev=>(prev+1))
		  setupdate(prev=>(prev+1))

 }



	const [Counter, setCount] = useState(0)
	const [nameO, setnameO] = useState({name:'shree',age:22})
const [num, setnum] = useState([10,29,39])
const [update, setupdate] = useState(10)




  return (
	<div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
		<div className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
			<h1 className="text-3xl font-bold text-slate-900">Assignment 5</h1>
			<section className="rounded-xl border border-slate-200 p-5">
				<h2 className="text-xl font-semibold">Counter: {Counter}</h2>
				<button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700" onClick={handleCounter}>Click to increment counter</button>
			</section>

<br />
			<section className="rounded-xl border border-slate-200 p-5">
				<h2 className="text-xl font-semibold">{nameO.name}, {nameO.age} <span className="text-sm font-normal text-slate-500">using object</span></h2>
				<button className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700" onClick={changeO}>Click</button>
			</section>

			<section className="rounded-xl border border-slate-200 p-5">
				<h2 className="text-xl font-semibold">Numbers: {num.join(', ')}</h2>
				<button className="mt-4 rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700" onClick={arrayChange}>Click</button>
			</section>
			<section className="rounded-xl border border-slate-200 p-5">
				<h2 className="text-xl font-semibold">Batch updating: {update}</h2>
				<button className="mt-4 rounded-lg bg-orange-600 px-4 py-2 font-medium text-white transition hover:bg-orange-700" onClick={batchUpdate}>Click</button>
			</section>
		</div>
	</div>
  )
}

export default useStatemodern