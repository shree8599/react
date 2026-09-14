export async function analyzeResume(resume, jobDescription) {
  const response = await fetch("http://localhost:3000/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resume,
      jobDescription,
    }),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.error || "Something went wrong."
    );
  }

  return response.json();
}
export async function generateTailoredResume(
  resume,
  jobDescription,
  analysis
) {
  const response = await fetch("http://localhost:3000/api/tailor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resume,
      jobDescription,
      analysis,
    }),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.error || "Failed to generate tailored resume."
    );
  }

  return response.json();
}