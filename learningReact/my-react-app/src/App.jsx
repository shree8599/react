
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Page404 from './components/Page404.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeContext from './ThemeContext.jsx'



function App() {

  return (
    
      <BrowserRouter>
        <div className=" text-2xl h-screen w-full text-center " >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    
  
  )
}
export default App

