import React, { useState, useEffect } from 'react'

function Greeting_Hooks() {
    const [name, setName] = useState("Tong")

    useEffect(() => {
        document.title = name
    })

    return (
        <div>
            <label>name: </label>
            <input value={name} onChange={ (e) => setName(e.target.value) }></input>
        </div>
    )
}

export default Greeting_Hooks