import { useState } from "react";

export default function ExperienceForm() {
  const [job, setJob] = useState({
    company: "",
    position: "",
    tasks: "",
    from: "",
    until: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setJob((j) => ({ ...j, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Experience:", job);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Experience</h2>

      <label>
        Company name
        <input name="company" value={job.company} onChange={handleChange} />
      </label>

      <label>
        Position title
        <input name="position" value={job.position} onChange={handleChange} />
      </label>

      <label>
        Main responsibilities
        <textarea
          name="tasks"
          rows={4}
          value={job.tasks}
          onChange={handleChange}
        />
      </label>

      <label>
        From
        <input name="from" type="date" value={job.from} onChange={handleChange} />
      </label>

      <label>
        Until
        <input
          name="until"
          type="date"
          value={job.until}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}