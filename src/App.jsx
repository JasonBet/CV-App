// App.jsx ---------------------------------------------------
import { useState } from "react";
import "./App.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

// -- reusable helpers --------------------------------------
const todayISO = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

export default function App() {
  /* -------- DEFAULT RESUME DATA (edit as you like) ------- */
  const [general, setGeneral] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555--555--5555",
  });

  const [experience, setExperience] = useState([
    {
      company: "Acme Inc.",
      position: "Software Engineer",
      tasks: "Developed and maintained web applications.",
      from: "2022-01-01",
      until: todayISO, // shows “Present”
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: "State University",
      title: "B.Sc. Computer Science",
      date: "2021-06-01",
    },
  ]);

  const [skills, setSkills] = useState([
    { category: "Cloud", items: "AWS, Azure, Lambda" },
  ]);

  /* --------------- render --------------------------------- */
  return (
    <div className="main-container">
      <LeftSide
        data={{ general, experience, education, skills }}
        setters={{ setGeneral, setExperience, setEducation, setSkills }}
      />

      <RightSide
        data={{ general, experience, education, skills }}
      />
    </div>
  );
}

