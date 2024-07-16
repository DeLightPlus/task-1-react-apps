import React, { useState } from "react";
import "./LoadSongs.css"


function LoadSongs(props)
{
    const [songTitle, setSongTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [albumName, setAlbumName] = useState("");
    const [genre, setGenre] = useState("");
    const [artworkFile, setArtworkFile] = useState(null);
    const [artworkPreview, setArtworkPreview] = useState("");

    const handleOnclick = (e) => 
    { 
        e.preventDefault();
        const reader = new FileReader();

        reader.onload = () => 
        {
            const artworkURL = reader.result;
            props.handleLoadSongs(artworkURL, songTitle, artist, albumName, genre);
            resetForm();
        };

        if (artworkFile) 
        {
            reader.readAsDataURL(artworkFile);
        } 
        else 
        {
            props.handleLoadSongs("", songTitle, artist, albumName, genre);
            resetForm();
        }
    };

    const handleArtworkChange = (e) =>
    {
        const file = e.target.files[0];
        setArtworkFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setArtworkPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setArtworkPreview("");
        }
    };

    const resetForm = () => 
    {
        setSongTitle("_Title");
        setArtist("_Artist");
        setAlbumName("_Album");
        setGenre("_Genre");
        setArtworkFile(null);
        setArtworkPreview("");
    };

    return(
        
            <div className="LoadSong-Container">
                <div className="form-container">
                    <div className='form-header'>
                        <strong>Add a Song</strong>
                        <br></br>
                    </div>
                    <form id="songForm">
                        <div className="form-group preview" >
                            <div className="preview">
                                {
                                    artworkPreview && 
                                    ( <div>
                                        <img src={artworkPreview} alt="Artwork Preview" width="100" />
                                    </div> )
                                }
                            </div>

                            <div>
                                <label htmlFor="artwork">__Song Artwork Image</label>                            
                                <input type="file" id="artwork"  
                                    onChange={handleArtworkChange} />
                            </div>                          
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Song Title:</label>
                            <br></br>
                            <input type="text" id="title"  
                                onChange={ (e) => { setSongTitle(e.target.value); }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="artist">Artist:</label>
                            <br></br>
                            <input type="text" id="artist"  
                                onChange={ (e) =>{ setArtist(e.target.value); }} />
                        </div>                

                        <div className="form-group">
                            <label htmlFor="album">Album Name:</label>
                            <br></br>
                            <input type="text" id="album"  
                                onChange={ (e) =>{ setAlbumName(e.target.value); }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genre">Genre:</label>
                            <br></br>
                            <input type="text" id="genre" 
                                 onChange={ (e) =>{ setGenre(e.target.value); }} />
                        </div>

                        <button className="btn" 
                            onClick={handleOnclick}>Add Song</button>
                    </form>
                </div>                          
            </div>
        
    );
}

export default LoadSongs;