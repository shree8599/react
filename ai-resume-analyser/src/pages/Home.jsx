import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { analyzeResume } from "../services/aiService";
import Results from "./Results";

import Navbar from "../components/Navbar";
import ResumeInput from "../components/ResumeInput";
import JobInput from "../components/JobInput";

function Home() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [analysis, setAnalysis] = useState(null);
  const [tailoredResume, setTailoredResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!resume.trim() || !jobDescription.trim()) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await analyzeResume(
        resume,
        jobDescription
      );

      setAnalysis(result);

      console.log("Analysis Result:", result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  
if (analysis) {
  return <Results analysis={analysis}
      resume={resume}
      jobDescription={jobDescription}
      tailoredResume={tailoredResume}
      setTailoredResume={setTailoredResume}
  
  
  />;
}
return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <Sparkles className="h-4 w-4" />
            AI-powered career assistant
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Know exactly how well your
            <span className="text-blue-500">
              {" "}resume matches.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Compare your resume with any job description,
            discover missing skills, and create an AI-optimized
            resume tailored to the role.
          </p>

        </section>

        {/* Inputs */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">

          <ResumeInput
            resume={resume}
            setResume={setResume}
          />

          <JobInput
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />

        </section>

        {/* Error */}
        {error && (
          <p className="mt-4 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        {/* Analyze button */}
        <div className="mt-8 flex justify-center">

          <button
            onClick={handleAnalyze}
            disabled={
              !resume.trim() ||
              !jobDescription.trim() ||
              loading
            }
            className="group flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Sparkles className="h-5 w-5" />

            {loading
              ? "Analyzing Resume..."
              : "Analyze My Resume"}

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>

        </div>

      </main>

    </div>
  );
}

export default Home;