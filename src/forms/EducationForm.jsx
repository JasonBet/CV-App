// forms/EducationForm.jsx ---------------------------------
import { nanoid } from "nanoid";   // npm i nanoid (tiny id generator)

export default function EducationForm({ entries, onChange }) {
  /* ----- add / remove helpers ---------------------------- */
  const add = () =>
    entries.length < 3 &&
    onChange([...entries, { id: nanoid(), school: "", title: "", date: "" }]);

  const remove = (id) => onChange(entries.filter((e) => e.id !== id));

  const edit = (id, field, value) =>
    onChange(
      entries.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );

  /* ----- render ------------------------------------------ */
  return (
    <div>
      <h2>Education</h2>

      {entries.map((degree) => (
        <fieldset key={degree.id}>
          <label>
            School name
            <input
              value={degree.school}
              onChange={(e) => edit(degree.id, "school", e.target.value)}
            />
          </label>

          <label>
            Title of study
            <input
              value={degree.title}
              onChange={(e) => edit(degree.id, "title of study", e.target.value)}
            />
          </label>

          <label>
            Date
            <input
              type="date"
              value={degree.date}
              onChange={(e) => edit(degree.id, "date", e.target.value)}
            />
          </label>

          {entries.length > 1 && (
            <button type="button" onClick={() => remove(degree.id)}>
              Remove
            </button>
          )}
        </fieldset>
      ))}

      <button type="button" disabled={entries.length === 3} onClick={add}>
        Add Education
      </button>
    </div>
  );
}
