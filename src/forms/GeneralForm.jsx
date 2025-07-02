// forms/GeneralForm.jsx
export default function GeneralForm({ value, onChange }) {
  const update = (field, val) => onChange({ ...value, [field]: val });

  return (
    <form>
      <h2>General</h2>

      <label>
        Name
        <input
          value={value.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </label>

      <label>
        Email
        <input
          value={value.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </label>

      <label>
        Phone
        <input
          value={value.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </label>
    </form>
  );
}
