import React from 'react'
import { useState } from 'react'

const App = () => {

  const [subject, setSubject] = useState("")
  const [time, setTime] = useState("")
  const [data, setData] = useState([])
  


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto"></div>
            <div className="divide-y divide-gray-200"></div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Education Planner</h1>
                <p className="text-gray-600 mb-8">Welcome to the Education Planner app!</p>
              </div>
              
              <form onSubmit={(e) => {
                  e.preventDefault()
                  const newData = [...data, {subject, time, Score: 0}]
                  setData(newData)
                  setSubject('')
                  setTime('')
                }}
                className="space-y-4 py-8"
              >
                <input 
                  type="text" 
                  value={subject} 
                  placeholder='Subject name' 
                  onChange={(e)=>setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder="Time in hours"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add
                </button>
              </form>

              <div className="py-8">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button 
                            onClick={() => {
                              const newData = [...data];
                              newData[index].time = Number(item.time) + 1;
                              setData(newData);
                            }}
                            className="text-blue-500 hover:text-blue-700 text-xl font-bold"
                          >
                            +
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button 
                            onClick={() => {
                              const newData = [...data];
                              if (Number(item.time) > 0) {
                                newData[index].time = Number(item.time) - 1;
                              }
                              setData(newData);
                            }}
                            className="text-red-500 hover:text-red-700 text-xl font-bold"
                          >
                            -
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  )
}

export default App

