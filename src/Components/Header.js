import React from 'react'
import './Style.css'

export default function Header() {
    return (
        <div className="header">
            <img className='logo' src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt = 'logo' />
            <h2> Meme Generator</h2>
            <h3>Generate your own meme</h3>
        </div>
    )
} 