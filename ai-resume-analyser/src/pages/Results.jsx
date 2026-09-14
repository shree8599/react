import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
    Sparkles,
} from "lucide-react";

import { generateTailoredResume } from "../services/aiService";
import { useState } from "react";
import TailoredResumePreview from "../components/TailoredResumePreview";

function Results({ analysis, resume, jobDescription,setTailoredResume, tailoredResume }) {
    const [generating, setGenerating] = useState(false);
const [error, setError] = useState("");
  if (!analysis) {



    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">
            No analysis available
          </h1>

          <p className="mt-3 text-slate-400">
            Analyze your resume first to see the results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-blue-400">
            AI Resume Analysis
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Your Resume Results
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Here's how well your resume matches the job description.
          </p>
        </div>

        {/* Match Score */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-blue-500" />

                <h2 className="text-xl font-semibold">
                  Overall Match
                </h2>
              </div>

              <p className="mt-3 max-w-xl text-slate-400">
                {analysis.summary}
              </p>
            </div>

            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-8 border-blue-500/20">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400">
                  {analysis.matchScore}%
                </p>

                <p className="text-xs text-slate-500">
                  MATCH
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Two columns */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Matched Skills */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />

              <h2 className="text-xl font-semibold">
                Matched Skills
              </h2>
            </div>

            <div className="space-y-3">
              {analysis.matchedSkills?.length > 0 ? (
                analysis.matchedSkills.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                  >
                    <p className="font-medium text-white">
                      {item.skill}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.reason}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">
                  No matching skills found.
                </p>
              )}
            </div>

          </section>

          {/* Missing Skills */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="mb-5 flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-400" />

              <h2 className="text-xl font-semibold">
                Missing Skills
              </h2>
            </div>

            <div className="space-y-3">
              {analysis.missingSkills?.length > 0 ? (
                analysis.missingSkills.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-white">
                        {item.skill}
                      </p>

                      <span className="rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-400">
                        {item.importance}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.reason}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">
                  No major missing skills detected.
                </p>
              )}
            </div>

          </section>

        </div>

        {/* Weaknesses */}
        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-5 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-400" />

            <h2 className="text-xl font-semibold">
              Resume Weaknesses
            </h2>
          </div>

          <div className="space-y-3">
            {analysis.weaknesses?.map((weakness, index) => (
              <div
                key={index}
                className="rounded-xl bg-slate-950 p-4 text-sm text-slate-300"
              >
                {weakness}
              </div>
            ))}
          </div>

        </section>

        {/* Recommendations */}
        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-5 flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-blue-400" />

            <h2 className="text-xl font-semibold">
              AI Recommendations
            </h2>
          </div>

          <div className="space-y-3">
            {analysis.recommendations?.map((recommendation, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-xl bg-slate-950 p-4"
              >
                <span className="font-bold text-blue-500">
                  {index + 1}.
                </span>

                <p className="text-sm text-slate-300">
                  {recommendation}
                </p>
              </div>
            ))}
          </div>

        </section>
{/* Tailored Resume */}
<section className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">

  <div className="mx-auto max-w-2xl">

    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
      <Sparkles className="h-6 w-6 text-blue-400" />
    </div>

    <h2 className="text-2xl font-bold text-white">
      Ready to improve your resume?
    </h2>

    <p className="mt-2 text-slate-400">
      Generate an ATS-friendly version tailored to this job
      using only the information already present in your resume.
    </p>

    {error && (
      <p className="mt-4 text-sm text-red-400">
        {error}
      </p>
    )}

   <button
  onClick={async () => {
    try {
      setGenerating(true);
      setError("");

      const result = await generateTailoredResume(
        resume,
        jobDescription,
        analysis
      );

      setTailoredResume(result);
    } catch (err) {
      console.error("Tailored resume error:", err);
      setError(err.message || "Failed to generate tailored resume.");
    } finally {
      setGenerating(false);
    }
  }}
  disabled={generating}
  className="mt-6 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
>
  <Sparkles className="h-5 w-5" />

  {generating
    ? "Generating Resume..."
    : "Generate Tailored Resume"}
</button>

  </div>

</section>
{tailoredResume && (
  <TailoredResumePreview resume={tailoredResume} />
)}
      </main>
    </div>
  );
}

export default Results;