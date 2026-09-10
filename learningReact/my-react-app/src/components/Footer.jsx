import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="relative w-full overflow-hidden bg-linear-to-r from-indigo-900 via-purple-800 to-pink-700 py-6  bottom-0 text-white shadow-lg">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-medium text-purple-100">
            &copy; 2023 My App. All rights reserved.
          </p>
          <p className="text-xs text-purple-200">Built with React and Tailwind CSS</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer