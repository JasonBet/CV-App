//LeftSide.jsx
import { useState } from 'react'
import NavOptions from "./NavOptions"
import Editor from "./Editor"


function LeftSide () {

    return (
        <div className="left-side">
            <NavOptions></NavOptions>
            <Editor></Editor>
        </div>
    )
}

export default LeftSide