// RightSide.jsx --------------------------------------------
import "./RightSide.css";

export default function RightSide({ data, onPrint }) {
  const { general, experience, education, skills } = data;
  const today = new Date().toISOString().slice(0, 10);

  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return isNaN(d)
      ? ""
      : d.toLocaleString("default", { month: "short", year: "numeric" });
  };

  const generalLine = Object.entries(general)
    .filter(([k]) => k !== "name")
    .map(([, v]) => v.trim())
    .filter(Boolean)
    .join(" | ");

  return (
    <div className="right-side">
      {/* ---------- print button --------------------------- */}
      <button className="print-btn no-print" onClick={onPrint}>
        Print / Save PDF
      </button>

      {/* ---------- General ------------------------------- */}
      <header>
        <h1>{general.name}</h1>
        <p>{generalLine}</p>
      </header>

      {/* ---------- Experience ---------------------------- */}
      <section>
        <h2 className="section-title">Experience</h2>
        <hr />

        {experience.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="left">
              <strong>{job.position}</strong>
              <div>{job.company}</div>
              {/* bullet points */}
              <ul>
                {job.tasks
                  .split("\n")
                  .filter((t) => t.trim())
                  .map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
              </ul>
            </div>

            <div className="right">
              {fmtDate(job.from)} –{" "}
              {job.until && job.until >= today
                ? "Present"
                : fmtDate(job.until)}
            </div>
          </div>
        ))}
      </section>

      {/* ---------- Education ----------------------------- */}
      <section>
        <h2 className="section-title">Education</h2>
        <hr />

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

      {/* ---------- Skills -------------------------------- */}
      <section>
        <h2 className="section-title">Skills</h2>
        <hr />

        {skills.map((sk) => (
          <p key={sk.id}>
            <strong>{sk.category}:</strong> {sk.items}
          </p>
        ))}
      </section>
    </div>
  );
}
