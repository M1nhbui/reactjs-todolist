import React from 'react'
import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="input-container">
            <input value={inputValue} onchange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="Add task" />
            <button onClick={() => { }}>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
