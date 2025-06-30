import { useState } from "react";

export default function EducationForm() {
  const [edu, setEdu] = useState({
    school: "",
    studyTitle: "",
    studyDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEdu((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Education:", edu);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Education</h2>

      <label>
        School name
        <input name="school" value={edu.school} onChange={handleChange} />
      </label>

      <label>
        Title of study
        <input
          name="studyTitle"
          value={edu.studyTitle}
          onChange={handleChange}
        />
      </label>

      <label>
        Date of study
        <input
          name="studyDate"
          type="date"
          value={edu.studyDate}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}