// forms/ExperienceForm.jsx ---------------------------------
import { nanoid } from "nanoid";   // npm i nanoid (tiny id generator)

export default function ExperienceForm({ entries, onChange }) {
  /* ----- add / remove helpers ---------------------------- */
  const add = () =>
    entries.length < 3 &&
    onChange([...entries, { id: nanoid(), company: "", position: "", tasks: "", from: "", until: "" }]);

  const remove = (id) => onChange(entries.filter((e) => e.id !== id));

  const edit = (id, field, value) =>
    onChange(
      entries.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );

  /* ----- render ------------------------------------------ */
  return (
    <div>
      <h2>Experience</h2>

      {entries.map((job) => (
        <fieldset key={job.id}>
          <label>
            Company
            <input
              value={job.company}
              onChange={(e) => edit(job.id, "company", e.target.value)}
            />
          </label>

          <label>
            Position
            <input
              value={job.position}
              onChange={(e) => edit(job.id, "position", e.target.value)}
            />
          </label>

          <label>
            Responsibilities
            <textarea
              rows={3}
              value={job.tasks}
              onChange={(e) => edit(job.id, "tasks", e.target.value)}
            />
          </label>

          <label>
            From
            <input
              type="date"
              value={job.from}
              onChange={(e) => edit(job.id, "from", e.target.value)}
            />
          </label>

          <label>
            Until
            <input
              type="date"
              value={job.until}
              onChange={(e) => edit(job.id, "until", e.target.value)}
            />
          </label>

          {entries.length > 1 && (
            <button type="button" onClick={() => remove(job.id)}>
              Remove
            </button>
          )}
        </fieldset>
      ))}

      <button type="button" disabled={entries.length === 3} onClick={add}>
        Add Experience
      </button>
    </div>
  );
}
