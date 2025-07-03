// RightSide.jsx -------------------------------------------------
import { useRef, forwardRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./RightSide.css";

/* ---------- Résumé body (forwardRef) ------------------------ */
const ResumeBody = forwardRef(({ data }, ref) => {
  const { general, experience, education, skills } = data;
  const today = new Date().toISOString().slice(0, 10);

  const fmtDate = (iso) =>
    isNaN(new Date(iso)) ? "" :
    new Date(iso).toLocaleString("default", { month: "short", year: "numeric" });

  const generalLine = Object.entries(general)
    .filter(([k]) => k !== "name")
    .map(([, v]) => v.trim())
    .filter(Boolean)
    .join(" | ");

  return (
    <div ref={ref} className="resume-page">
      {/* -------- General --------------------------------- */}
      <header>
        <h1>{general.name}</h1>
        <p>{generalLine}</p>
      </header>

      {/* -------- Experience ------------------------------ */}
      <section>
        <h2 className="section-title">Experience</h2><hr/>
        {experience.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="left">
              <strong>{job.position}</strong>
              <div>{job.company}</div>
              <ul>
                {job.tasks.split("\n")
                  .filter((t) => t.trim())
                  .map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
            <div className="right">
              {fmtDate(job.from)} – {job.until && job.until >= today
                ? "Present" : fmtDate(job.until)}
            </div>
          </div>
        ))}
      </section>

      {/* -------- Education ------------------------------- */}
      <section>
        <h2 className="section-title">Education</h2><hr/>
        {education.map((ed) => (
          <div key={ed.id} className="education-item">
            <div className="left">
              <strong>{ed.school}</strong>
              <div>{ed.title}</div>
            </div>
            <div className="right">{fmtDate(ed.date)}</div>
          </div>
        ))}
      </section>

      {/* -------- Skills ---------------------------------- */}
      <section>
        <h2 className="section-title">Skills</h2><hr/>
        {skills.map((sk) => (
          <p key={sk.id}>
            <strong>{sk.category}:</strong> {sk.items}
          </p>
        ))}
      </section>
    </div>
  );
});

/* ---------- Wrapper with the Print button ------------------- */
export default function RightSide({ data }) {
  const resumeRef = useRef(null);

  /* v3 API: pass the ref via `contentRef` */
  const print = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${data.general.name || "resume"}`,
  });

  return (
    <div className="right-side">
      {/* hide from paper with .no-print */}
      <button className="print-btn no-print" onClick={() => print()}>
        Print / Save PDF
      </button>

      <ResumeBody ref={resumeRef} data={data} />
    </div>
  );
}
