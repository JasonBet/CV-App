// App.jsx ---------------------------------------------------
import { useState, useEffect } from "react";
import "./App.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const STORAGE_KEY = "cv-builder-data";

/* helper used inside defaultData */
const TODAY_ISO = new Date().toISOString().slice(0, 10);

/* ---------- default résumé data -------------------------- */
const DEFAULT_DATA = {
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
      from: "2025-01-01",
      until: TODAY_ISO,               // ← TODAY_ISO is *used* here
    },
  ],

  education: [
    {
      id: 1,
      school: "State University",
      title: "B.S. Computer Science",
      date: "2025-06-01",
    },
  ],

  skills: [
    { id: 1, category: "Cloud", items: "AWS, Azure, Lambda" },
  ],
};

export default function App() {
  /* ---------- state -------------------------------------- */
  const [data, setData] = useState(DEFAULT_DATA);

  /* ---------- load from localStorage --------------------- */
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored) setData({ ...DEFAULT_DATA, ...stored }); // shallow merge
    } catch {
      /* ignore corrupt JSON */
    }
  }, []);

  /* ---------- save on every change ----------------------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  /* ---------- setters passed to forms -------------------- */
  const setters = {
    setGeneral:    (g) => setData((d) => ({ ...d, general: g })),
    setExperience: (e) => setData((d) => ({ ...d, experience: e })),
    setEducation:  (e) => setData((d) => ({ ...d, education: e })),
    setSkills:     (s) => setData((d) => ({ ...d, skills: s })),
  };

  /* ---------- render ------------------------------------- */
  return (
    <div className="main-container">
      <LeftSide data={data} setters={setters} />
      <RightSide data={data} /> {/* react-to-print handles its own print */}
    </div>
  );
}
