import React from 'react'

export function TodoInput() {
    return (
        <div className="input-container">
            <input placeholder="Add task"></input>
            <button>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
