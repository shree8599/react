import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get in touch
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Have a question, project idea, or just want to say hello? Send us a
            message and we&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid gap-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Contact information</h2>
              <p className="mt-3 text-slate-400">
                We&apos;re happy to help and answer any questions you may have.
              </p>
            </div>
            <div className="space-y-5 text-slate-300">
              <p><span className="mr-3 text-cyan-400">✉</span>hello@example.com</p>
              <p><span className="mr-3 text-cyan-400">☎</span>+1 (555) 123-4567</p>
              <p><span className="mr-3 text-cyan-400">⌖</span>123 Main Street, New York</p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">
                Name
                <input type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
              </label>
              <label className="space-y-2 text-sm font-medium">
                Email
                <input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
              </label>
            </div>
            <label className="block space-y-2 text-sm font-medium">
              Message
              <textarea rows="5" placeholder="Tell us how we can help..." className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
            <button type="submit" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact