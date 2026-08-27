import React from 'react'
import {Bookmark} from 'lucide-react'
import Datadrill from '../src/Datadrill'
import App from '../src/App'

const Cards = ({brandLogo,companyName,datePosted,post,tag1,tag2,location,payroll}) => {
  return (
    
        <div className="card">
          <div className='main'>
        <div className="top">
        
          <img src={brandLogo} alt="" />
          <button>Save <Bookmark size={12}  /> </button>

        </div>
         <div className="center">
          <div className='role'>
         <span><b>{companyName}</b> {datePosted} </span>
          <h1> {post} </h1>
          </div>
          <div className='work'>
          <span> {tag1} </span> <span> {tag2} </span>
          </div>
         </div>
         </div>
       
        <div className="bottom">
           <div className='down'>
          <h2> {payroll} </h2>
          <p> {location} </p>
          </div>
         <button> Apply now </button>
        </div>
      </div>
    
  )
}

export default Cards