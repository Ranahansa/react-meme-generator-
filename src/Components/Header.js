import React from 'react'
import './Style.css'

/**
 * Header component for the Meme Generator app.
 * 
 * Displays the header section with a logo, title, and subtitle.
 */
export default function Header() {
    return (
        <div className="header">
            {/* Logo */}
            <img className='logo' src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt = 'logo' />
            
            {/* Title */}
            <h2> Meme Generator</h2>
            
            {/* Subtitle */}
            <h3>Generate your own meme</h3>
        </div>
    )
} 