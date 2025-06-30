import { useState } from "react";

export default function SkillsForm() {
  const [category, setCategory] = useState("");
  const [items, setItems] = useState("");
  const [skills, setSkills] = useState([]);

  function addSkill(e) {
    e.preventDefault();
    if (!category.trim()) return;

    setSkills((s) => [...s, { category, items }]);
    setCategory("");
    setItems("");
  }

  return (
    <>
      <form onSubmit={addSkill}>
        <h2>Skills</h2>

        <label>
          Category
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <label>
          Items (comma-separated)
          <input value={items} onChange={(e) => setItems(e.target.value)} />
        </label>

        <button type="submit">Add</button>
      </form>

      {/* quick preview */}
      <ul>
        {skills.map((s, idx) => (
          <li key={idx}>
            <strong>{s.category}:</strong> {s.items}
          </li>
        ))}
      </ul>
    </>
  );
}