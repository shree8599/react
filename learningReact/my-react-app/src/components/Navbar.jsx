import { useContext } from 'react'
import { Link } from 'react-router-dom'
// useContext is a hook that allows you to access the value of a context in a functional component. It takes a context object (the value returned from createContext) as an argument and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

const Navbar = () => {
 const { name } = useContext(PpstData);
  

  return (
    <div className="top-0 left-0 z-50 w-full bg-slate-950/80 backdrop-blur-sm">
      <nav className="w-full rounded-2xl border border-white/20 bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 px-5 py-4 text-white shadow-xl shadow-purple-900/20 backdrop-blur sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            to="/"
            className="bg-linear-to-r from-cyan-300 to-purple-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-transform duration-300 hover:scale-105"
          >
            {name} React App
          </Link>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
            >
              Contact
            </Link>
            <Link
              to="/products"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Products
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar