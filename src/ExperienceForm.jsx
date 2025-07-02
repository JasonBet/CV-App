import { useState } from "react";

export default function ExperienceForm() {
  const empty = {
    company: "",
    position: "",
    tasks: "",
    from: "",
    until: "",
  };

  const [entries, setEntries] = useState([empty]);

  /* ─ helpers ────────────────────────────────────────────── */
  const addEntry = () =>
    setEntries((e) => e.length < 3 ? [...e, empty] : e);

  const removeEntry = (idx) =>
    setEntries((e) => e.filter((_, i) => i !== idx));

  const handleChange = (idx, field, value) =>
    setEntries((e) =>
      e.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    );

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Experience:", entries);
  };

  /* ─ render ──────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSave}>
      <h2>Experience</h2>

      {entries.map((job, idx) => (
        <fieldset key={idx}>
          <legend>Job #{idx + 1}</legend>

          <label>
            Company
            <input
              value={job.company}
              onChange={(e) =>
                handleChange(idx, "company", e.target.value)
              }
            />
          </label>

          <label>
            Position
            <input
              value={job.position}
              onChange={(e) =>
                handleChange(idx, "position", e.target.value)
              }
            />
          </label>

          <label>
            Responsibilities
            <textarea
              rows={3}
              value={job.tasks}
              onChange={(e) =>
                handleChange(idx, "tasks", e.target.value)
              }
            />
          </label>

          <label>
            From
            <input
              type="date"
              value={job.from}
              onChange={(e) =>
                handleChange(idx, "from", e.target.value)
              }
            />
          </label>

          <label>
            Until
            <input
              type="date"
              value={job.until}
              onChange={(e) =>
                handleChange(idx, "until", e.target.value)
              }
            />
          </label>

          {entries.length > 1 && (
            <button type="button" onClick={() => removeEntry(idx)}>
              Remove
            </button>
          )}
        </fieldset>
      ))}

      <button
        type="button"
        onClick={addEntry}
        disabled={entries.length === 3}
      >
        Add Experience
      </button>

      <button type="submit">Save</button>
    </form>
  );
}
