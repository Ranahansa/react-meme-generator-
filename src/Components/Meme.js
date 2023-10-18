import React from 'react';
import './Style.css';
import MemesData from './MemesData';

export default function Meme() { 
    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage(event) {
        event.preventDefault();
        const memesArray = MemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <div>
            <main>
                <form className="form">
                    <input className="input" type="text" placeholder="Top Text" />
                    <input className="input" type="text" placeholder="Bottom Text" />
                    <button className="button" onClick={(event) => getMemeImage(event)}>Get a New Meme Image</button>
                </form>
                <img src ={memeImage} className="meme-image"/>
            </main> 
        </div>
    )
}