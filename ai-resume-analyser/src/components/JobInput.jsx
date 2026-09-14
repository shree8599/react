import { Briefcase } from "lucide-react";

function JobInput({ jobDescription, setJobDescription }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-purple-500/10 p-2">
          <Briefcase className="h-5 w-5 text-purple-500" />
        </div>

        <div>
          <h2 className="font-semibold text-white">
            Job Description
          </h2>

          <p className="text-sm text-slate-400">
            Paste the job you're applying for
          </p>
        </div>
      </div>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
        rows={18}
        className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-purple-500"
      />

      <p className="mt-2 text-right text-xs text-slate-500">
        {jobDescription.length} characters
      </p>

    </div>
  );
}

export default JobInput;