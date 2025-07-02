// LeftSide.jsx ---------------------------------------------
import { useState } from "react";
import NavOptions from "./NavOptions";
import Editor from "./Editor";

export default function LeftSide({ data, setters }) {
  const [active, setActive] = useState("general");

  return (
    <div className="left-side">
      <NavOptions activeOption={active} onSelect={setActive} />
      <Editor active={active} data={data} setters={setters} />
    </div>
  );
}
