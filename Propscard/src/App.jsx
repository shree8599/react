
import React from 'react'

import Cards from '../components/Cards'

const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payroll: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$48/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payroll: "$28/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/spotify",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Content Strategist",
    tag1: "Part Time",
    tag2: "Junior Level",
    payroll: "$25/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$45/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    companyName: "Uber",
    datePosted: "7 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    payroll: "$30/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/salesforce",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payroll: "$40/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/ibm",
    companyName: "IBM",
    datePosted: "1 day ago",
    post: "Data Scientist",
    tag1: "Part Time",
    tag2: "Junior Level",
    payroll: "$32/hour",
    location: "Pune, India"
  }
];

const App = () => {
  return (
   
  <div className="parent">
   {jobOpenings.map(function(props){
    return <Cards brandLogo={props.brandLogo} companyName={props.companyName}  datePosted={props.datePosted} post={props.post}   tag1={props.tag1} tag2={props.tag2} location={props.location} payroll={props.payroll}          />
   })}

</div>
  )
}

export default App