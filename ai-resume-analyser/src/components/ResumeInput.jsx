import { FileText, Upload } from "lucide-react";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ResumeInput({ resume, setResume }) {

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    try {

      // =========================
      // DOCX FILE
      // =========================

      if (file.name.endsWith(".docx")) {

        const arrayBuffer = await file.arrayBuffer();

        const result = await mammoth.extractRawText({
          arrayBuffer,
        });

        setResume(result.value);

        return;
      }


      // =========================
      // PDF FILE
      // =========================

      if (file.name.endsWith(".pdf")) {

        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
          data: arrayBuffer,
        }).promise;

        let extractedText = "";

        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages;
          pageNumber++
        ) {

          const page = await pdf.getPage(pageNumber);

          const textContent =
            await page.getTextContent();

          const pageText = textContent.items
            .map((item) => item.str)
            .join(" ");

          extractedText += pageText + "\n";
        }

        setResume(extractedText);

        return;
      }


      // =========================
      // WRONG FILE TYPE
      // =========================

      alert("Please upload a PDF or DOCX file.");

    } catch (error) {

      console.error(
        "Resume extraction error:",
        error
      );

      alert(
        "Could not read this resume. Please try another PDF or DOCX file."
      );
    }
  };


  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      {/* Header */}

      <div className="mb-5 flex items-center gap-3">

        <div className="rounded-lg bg-blue-500/10 p-2">
          <FileText className="h-5 w-5 text-blue-500" />
        </div>

        <div>

          <h2 className="font-semibold text-white">
            Your Resume
          </h2>

          <p className="text-sm text-slate-400">
            Paste your resume or upload a PDF/DOCX
          </p>

        </div>

      </div>


      {/* Upload Area */}

      <label className="mb-4 flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-slate-700 p-5 transition hover:border-blue-500 hover:bg-slate-800/50">

        <div className="text-center">

          <Upload className="mx-auto mb-2 h-6 w-6 text-slate-400" />

          <p className="text-sm font-medium text-slate-300">
            Upload Resume
          </p>

          <p className="mt-1 text-xs text-slate-500">
            PDF or DOCX up to 5MB
          </p>

        </div>


        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />

      </label>


      {/* Resume Text */}

      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Or paste your resume here..."
        rows={12}
        className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-blue-500"
      />


      {/* Character Count */}

      <p className="mt-2 text-right text-xs text-slate-500">
        {resume.length} characters
      </p>

    </div>
  );
}

export default ResumeInput;