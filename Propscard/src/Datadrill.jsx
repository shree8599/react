import React from 'react'

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_2026_logo.svg/512px-Google_2026_logo.svg.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payroll: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$48/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payroll: "$28/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/512px-Adobe_Corporate_Logo.png",
    companyName: "Adobe",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/512px-Spotify_logo_without_text.svg.png",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Content Strategist",
    tag1: "Part Time",
    tag2: "Junior Level",
    payroll: "$25/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png",
    companyName: "Airbnb",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payroll: "$45/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/512px-Uber_logo_2018.svg.png",
    companyName: "Uber",
    datePosted: "7 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    payroll: "$30/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payroll: "$40/hour",
    location: "Bengaluru, India"
  }
];

const Datadrill = () => {
  return (
    <div>
        {jobOpenings}
    </div>
  )
}

export default Datadrill