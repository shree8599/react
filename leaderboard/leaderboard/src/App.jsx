import React, { useState } from 'react'

const App = () => {
  const [Fn, setFn] = useState('')
  const [Ln, setLn] = useState('')
  const [Score, setScore] = useState('')
  const [Country, setCountry] = useState('')
  const [Data, setData] = useState([])

  function sorting(){
    const sortedData = [...Data].sort((a, b) => {
      return b.Score - a.Score;
    });
    setData(sortedData);
  }

  return (
    <>
   
    <div className="container mx-auto p-4">
      <div className="App text-center mb-8"></div>
        <h1 className='text-4xl font-extrabold text-blue-600 mb-4'>Leaderboard</h1>
        <p className="text-gray-600">Welcome to the leaderboard app!</p>
      </div>

      <form className="max-w-lg mx-auto space-y-4 mb-8">
        <input type="text" placeholder='firstname' className="w-full p-2 border rounded" onChange={(e) => setFn(e.target.value)} value={Fn}/>
        <input type="text" placeholder='lastname' className="w-full p-2 border rounded" onChange={(e) => setLn(e.target.value)} value={Ln}/>
        <input type="text" placeholder='score' className="w-full p-2 border rounded" onChange={(e)=>setScore(e.target.value)} value={Score}/>
        <select name="country" className="w-full p-2 border rounded" onChange={(e) => setCountry(e.target.value)} value={Country}>
          <option value="" selected>Select country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="India">India</option>
        </select>

        <button type='submit' 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={(e) => {
            e.preventDefault()
            const newData = [...Data, {Fn, Ln, Score: Number(Score), Country}]
            setData(newData.sort((a, b) => b.Score - a.Score))
            setFn('')
            setLn('')
            setScore('')
            setCountry('')
          }}>
          Submit
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Score</th>
              <th className="p-3 border">Country</th>
              <th className="p-3 border">add</th>
              <th className="p-3 border">remove</th>
              <th className="p-3 border">❌</th>
            </tr>
          </thead>
  
    
        
        <tbody className='table-body'>
          {Data.sort((a, b) => b.Score - a.Score).map((item, index) => (
            <tr key={index}>
              <td>{item.Fn} {item.Ln}</td>
              <td>{item.Score}</td>
              <td>{item.Country}</td>
              <td onClick={() => {
                const newData = [...Data];
                newData[index].Score = Number(item.Score) + 5;
                setData(newData);
              }}>+5</td>
              <td onClick={() => {
                const newData = [...Data];
                newData[index].Score = Number(item.Score) - 5;
                setData(newData);
              }}>-5</td>
              <td onClick={() => {
                const newData = [...Data];
                newData.splice(index, 1);
                setData(newData);
              }}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
