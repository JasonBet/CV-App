import { useState } from "react";

export default function EducationForm() {
  const blank = { school: "", title: "", date: "" };
  const [entries, setEntries] = useState([blank]);

  const add = () => setEntries((e) => (e.length < 3 ? [...e, blank] : e));
  const remove = (idx) => setEntries((e) => e.filter((_, i) => i !== idx));

  const change = (idx, field, value) =>
    setEntries((e) =>
      e.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );

  const save = (e) => {
    e.preventDefault();
    console.log("Education:", entries);
  };

  return (
    <form onSubmit={save}>
      <h2>Education</h2>

      {entries.map((ed, idx) => (
        <fieldset key={idx}>
          <legend>School #{idx + 1}</legend>

          <label>
            School name
            <input
              value={ed.school}
              onChange={(e) => change(idx, "school", e.target.value)}
            />
          </label>

          <label>
            Title of study
            <input
              value={ed.title}
              onChange={(e) => change(idx, "title", e.target.value)}
            />
          </label>

          <label>
            Date of study
            <input
              type="date"
              value={ed.date}
              onChange={(e) => change(idx, "date", e.target.value)}
            />
          </label>

          {entries.length > 1 && (
            <button type="button" onClick={() => remove(idx)}>
              Remove
            </button>
          )}
        </fieldset>
      ))}

      <button type="button" onClick={add} disabled={entries.length === 3}>
        Add Education
      </button>

      <button type="submit">Save</button>
    </form>
  );
}
