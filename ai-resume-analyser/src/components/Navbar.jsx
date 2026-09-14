import { FileText, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-2">
            <FileText className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold text-white">
            Resume<span className="text-blue-500">AI</span>
          </span>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800">
          <Sparkles className="h-4 w-4" />
          How it works
        </button>

      </div>
    </nav>
  );
}

export default Navbar;