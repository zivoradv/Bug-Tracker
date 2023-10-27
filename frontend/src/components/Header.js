import React from 'react'
import { useState } from 'react'
import '../styles/Header.css'

function Header(name, handleInputChange) {

    const [showInput, setShowInput] = useState(false)
    return (
        <>
            <div class="header">
                <a href="#" class="btn" onClick={() => {
                    setShowInput(!showInput)
                }}>Add User</a>
            </div>
            <div className={showInput ? "showInput show" : "showInput"}>
            <input type="text" placeholder="Name of a Bug..." name="name" value={name} onChange={handleInputChange} />
            </div>
        </>
    )
}

export default Header