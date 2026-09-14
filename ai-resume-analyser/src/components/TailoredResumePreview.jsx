import {
  Download,
} from "lucide-react";

function TailoredResumePreview({ resume }) {
  if (!resume) {
    return null;
  }

  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Your Tailored Resume
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Optimized for the selected job using only your existing
            information.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      <div className="overflow-hidden rounded-xl bg-white text-slate-900 shadow-2xl">
        {/* Header */}
        <div className="border-b border-slate-200 px-10 py-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {resume.name}
          </h1>

          <p className="mt-1 text-lg font-medium text-blue-600">
            {resume.title}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            {resume.contact
              ?.split("|")
              .map((item, index) => (
                <span key={index}>{item.trim()}</span>
              ))}
          </div>
        </div>

        <div className="space-y-7 px-10 py-8">
          {/* Summary */}
          {resume.summary && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Professional Summary
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {resume.summary}
              </p>
            </section>
          )}

          {/* Skills */}
          {resume.skills?.length > 0 && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Technical Skills
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {resume.experience?.length > 0 && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Experience
              </h3>

              <div className="mt-4 space-y-5">
                {resume.experience.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col justify-between sm:flex-row">
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.role}
                        </h4>

                        <p className="text-sm text-blue-600">
                          {item.company}
                        </p>
                      </div>

                      <p className="mt-1 text-sm text-slate-500 sm:mt-0">
                        {item.duration}
                      </p>
                    </div>

                    {item.responsibilities?.length > 0 && (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {item.responsibilities.map(
                          (responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {resume.projects?.length > 0 && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Projects
              </h3>

              <div className="mt-4 space-y-4">
                {resume.projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-slate-900">
                      {project.name}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {resume.education?.length > 0 && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Education
              </h3>

              <div className="mt-3 space-y-2">
                {resume.education.map((education, index) => (
                  <p
                    key={index}
                    className="text-sm text-slate-700"
                  >
                    {education}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {resume.certifications?.length > 0 && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Certifications
              </h3>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {resume.certifications.map((certification, index) => (
                  <li key={index}>{certification}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Strengths */}
          {resume.strengths?.length > 0 && (
            <section>
              <h3 className="border-b border-slate-300 pb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                Strengths
              </h3>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {resume.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}

export default TailoredResumePreview;