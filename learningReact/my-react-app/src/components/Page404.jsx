import React from 'react'

const Page404 = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <div className="text-center">
        <p className="text-8xl font-bold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          Page not found
        </h1>
        <p className="mt-4 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </main>
  )
}

export default Page404