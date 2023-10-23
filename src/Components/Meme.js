import React from 'react';
import './Style.css';

/**
 * Component for displaying memes.
 */
export default function Meme() { 

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, []);



    /**
     * Function to get a random meme image from the MemesData array.
     * @param {Event} event - The event object.
     */

    function getMemeImage(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }


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