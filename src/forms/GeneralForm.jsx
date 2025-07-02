import { useState } from "react";

export default function GeneralForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("General details:", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>General</h2>

      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
      </label>

      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
      </label>

      <label>
        Phone
        <input name="phone" value={form.phone} onChange={handleChange} />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}