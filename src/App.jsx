// App.jsx ---------------------------------------------------
import { useState, useEffect } from "react";
import "./App.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const STORAGE_KEY = "cv-builder-data";

/* ----- default résumé (same as before) ------------------- */
const todayISO = new Date().toISOString().slice(0, 10);

const defaultData = {
  general: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-555-5555",
  },
  experience: [
    {
      id: 1,
      company: "Dynamics LLC",
      position: "Software Engineer",
      tasks: "Developed and maintained web applications.",
      from: "2025-01-1",
      until: todayISO,
    },
  ],
  education: [
    {
      id: 1,
      school: "State University",
      title: "B.S. Computer Science",
      date: "2025-06-1",
    },
  ],
  skills: [
    { id: 1, category: "Cloud", items: "AWS, Azure, Lambda" },
  ],
};

export default function App() {
  /* -------- state (one object for easier persistence) ----- */
  const [data, setData] = useState(defaultData);

  /* -------- on mount: read localStorage ------------------- */
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored) setData({ ...defaultData, ...stored }); // merge for safety
    } catch {
      /* ignore corrupt JSON */
    }
  }, []);

  /* -------- on every change: save ------------------------ */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  /* -------- helper setters for forms --------------------- */
  const setters = {
    setGeneral: (g) => setData((d) => ({ ...d, general: g })),
    setExperience: (e) => setData((d) => ({ ...d, experience: e })),
    setEducation: (e) => setData((d) => ({ ...d, education: e })),
    setSkills: (s) => setData((d) => ({ ...d, skills: s })),
  };

  /* -------- render --------------------------------------- */
  return (
    <div className="main-container">
      <LeftSide
        data={data}
        setters={setters}
      />

      {/* Pass a print handler down so RightSide can trigger it */}
      <RightSide
        data={data}
        onPrint={() => window.print()}
      />
    </div>
  );
}
