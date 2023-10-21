import React from 'react';
import './Style.css';
import MemesData from './MemesData';

/**
 * Component for displaying memes.
 */
export default function Meme() { 

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    /**
     * Function to get a random meme image from the MemesData array.
     * @param {Event} event - The event object.
     */
    function getMemeImage(event) {
        event.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    const [allMemeImages] = React.useState(MemesData);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <div>
            <main>
                <form className="form">
                    <input className="input"
                    type="text" placeholder="Top Text" 
                    name = "topText" 
                    value= {Meme.topText} onChange={handleChange}/>


                    <input className="input"
                    type="text" placeholder="Bottom Text"
                    name="bottomText"
                    value={Meme.bottomText} onChange={handleChange} />

                    <button className="button" onClick={(event) => getMemeImage(event)}>Get a New Meme Image</button>
                </form>
                <div className="meme">

                    <img src ={meme.randomImage} className="meme-image"/>
                    <h2 className="top">{meme.topText}</h2>
                    <h2 className="bottom">{meme.bottomText}</h2>
                </div>

            </main> 
        </div>
    )
} 