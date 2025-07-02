import { useState } from "react";

export default function SkillsForm() {
  const blank = { category: "", items: "" };
  const [entries, setEntries] = useState([blank]);

  const add = () => setEntries((s) => (s.length < 3 ? [...s, blank] : s));
  const remove = (idx) => setEntries((s) => s.filter((_, i) => i !== idx));

  const change = (idx, field, value) =>
    setEntries((s) =>
      s.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );

  const save = (e) => {
    e.preventDefault();
    console.log("Skills:", entries);
  };

  return (
    <form onSubmit={save}>
      <h2>Skills</h2>

      {entries.map((sk, idx) => (
        <fieldset key={idx}>
          <legend>Category #{idx + 1}</legend>

          <label>
            Category
            <input
              value={sk.category}
              onChange={(e) => change(idx, "category", e.target.value)}
            />
          </label>

          <label>
            Items (comma-separated)
            <input
              value={sk.items}
              onChange={(e) => change(idx, "items", e.target.value)}
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
        Add Skill Category
      </button>

      <button type="submit">Save</button>
    </form>
  );
}
