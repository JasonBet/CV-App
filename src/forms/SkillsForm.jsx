// forms/SkillsForm.jsx ---------------------------------
import { nanoid } from "nanoid";   // npm i nanoid (tiny id generator)

export default function SkillsForm({ entries, onChange }) {
  /* ----- add / remove helpers ---------------------------- */
  const add = () =>
    entries.length < 3 &&
    onChange([...entries, { id: nanoid(), category: "", items: "" }]);

  const remove = (id) => onChange(entries.filter((e) => e.id !== id));

  const edit = (id, field, value) =>
    onChange(
      entries.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );

  /* ----- render ------------------------------------------ */
  return (
    <div>
      <h2>Skills</h2>

      {entries.map((category) => (
        <fieldset key={category.id}>
          <label>
            Category
            <input
              value={category.category}
              onChange={(e) => edit(category.id, "category", e.target.value)}
            />
          </label>

          <label>
            Items (comma-separated)
            <input
              value={category.items}
              onChange={(e) => edit(category.id, "items", e.target.value)}
            />
          </label>

          {entries.length > 1 && (
            <button type="button" onClick={() => remove(category.id)}>
              Remove
            </button>
          )}
        </fieldset>
      ))}

      <button type="button" disabled={entries.length === 3} onClick={add}>
        Add Skills
      </button>
    </div>
  );
}
