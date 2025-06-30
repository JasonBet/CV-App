//LeftSide.jsx
import { useState } from 'react'
import NavOptions from "./NavOptions"
import Editor from "./Editor"


function LeftSide () {
    const [activeOption, setActiveOption] = useState("general");

    return (
        <div className="left-side">
            <NavOptions activeOption={activeOption} onSelect={setActiveOption}></NavOptions>
            <Editor option={activeOption} className="editor"></Editor>
        </div>
    )
}

export default LeftSide