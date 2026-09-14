import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
      return res.status(400).json({
        error: "Resume and job description are required.",
      });
    }

    const prompt = `
You are an expert technical recruiter and ATS resume analyst.

Compare the candidate's resume with the job description.

Analyze:

1. Overall match percentage.
2. Skills genuinely present in the resume that match the job.
3. Skills required by the job but not demonstrated in the resume.
4. Weaknesses in the resume.
5. Specific recommendations.

IMPORTANT ETHICAL RULES:

Never invent or assume:
- Work experience
- Projects
- Technologies
- Certifications
- Education
- Achievements
- Skills

Only mark a skill as matched when there is evidence in the resume.

If a required skill is not demonstrated in the resume,
put it in missingSkills.

The matchScore must be between 0 and 100.

CANDIDATE RESUME:

${resume}

JOB DESCRIPTION:

${jobDescription}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,

      config: {
        responseMimeType: "application/json",

        responseSchema: {
          type: "object",

          properties: {
            matchScore: {
              type: "number",
            },

            summary: {
              type: "string",
            },

            matchedSkills: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  skill: {
                    type: "string",
                  },
                  reason: {
                    type: "string",
                  },
                },
                required: ["skill", "reason"],
              },
            },

            missingSkills: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  skill: {
                    type: "string",
                  },
                  importance: {
                    type: "string",
                  },
                  reason: {
                    type: "string",
                  },
                },
                required: ["skill", "importance", "reason"],
              },
            },

            weaknesses: {
              type: "array",
              items: {
                type: "string",
              },
            },

            recommendations: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },

          required: [
            "matchScore",
            "summary",
            "matchedSkills",
            "missingSkills",
            "weaknesses",
            "recommendations",
          ],
        },
      },
    });

    const analysis = JSON.parse(response.text);

    res.json(analysis);
  } catch (error) {
    console.error("GEMINI ERROR:", error);

    res.status(500).json({
      error: error.message || "Failed to analyze resume.",
    });
  }
});

app.post("/api/tailor", async (req, res) => {
  try {
    const { resume, jobDescription, analysis } = req.body;

    if (!resume || !jobDescription || !analysis) {
      return res.status(400).json({
        error: "Resume, job description, and analysis are required.",
      });
    }

    const prompt = `
You are an expert resume writer.

Create a job-tailored version of the candidate's resume using
the original resume, job description, and resume analysis.

STRICT TRUTHFULNESS RULES:

You MUST NOT invent or add:
- Work experience
- Job titles
- Companies
- Projects
- Technologies
- Skills
- Certifications
- Education
- Achievements
- Awards
- Responsibilities
- Metrics or numbers

Every factual claim in the tailored resume must be supported
by the ORIGINAL RESUME.

You MAY:
- Rewrite sentences for clarity.
- Improve professional wording.
- Reorder existing information.
- Emphasize existing skills that are relevant to the job.
- Improve the resume summary/objective.
- Organize existing information into a more ATS-friendly format.
- Use keywords from the job description ONLY when the
  original resume already demonstrates that skill or experience.

If the job description asks for something that the candidate
does not have, DO NOT add it to the resume.

Return a complete tailored resume.

ORIGINAL RESUME:

${resume}

JOB DESCRIPTION:

${jobDescription}

ANALYSIS:

${JSON.stringify(analysis)}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,

      config: {
        responseMimeType: "application/json",

        responseSchema: {
          type: "object",

          properties: {
            name: {
              type: "string",
            },

            title: {
              type: "string",
            },

            contact: {
              type: "string",
            },

            summary: {
              type: "string",
            },

            skills: {
              type: "array",
              items: {
                type: "string",
              },
            },

            experience: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  company: {
                    type: "string",
                  },
                  role: {
                    type: "string",
                  },
                  duration: {
                    type: "string",
                  },
                  responsibilities: {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                },
                required: [
                  "company",
                  "role",
                  "duration",
                  "responsibilities",
                ],
              },
            },

            projects: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  description: {
                    type: "string",
                  },
                },
                required: ["name", "description"],
              },
            },

            education: {
              type: "array",
              items: {
                type: "string",
              },
            },

            certifications: {
              type: "array",
              items: {
                type: "string",
              },
            },

            strengths: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },

          required: [
            "name",
            "title",
            "contact",
            "summary",
            "skills",
            "experience",
            "projects",
            "education",
            "certifications",
            "strengths",
          ],
        },
      },
    });

    const tailoredResume = JSON.parse(response.text);

    res.json(tailoredResume);
  } catch (error) {
    console.error("TAILORED RESUME ERROR:", error);

    res.status(500).json({
      error:
        error.message || "Failed to generate tailored resume.",
    });
  }
});


app.listen(3000, () => {
  console.log("AI server running on http://localhost:3000");
});