import logo from './logo.svg';
import './App.css';
import LoadSongs from './components/LoadSongs/LoadSongs';

import React,{ useState, useEffect } from 'react';

function BookmarkApp() 
{
    const [action, setAction] = useState("")
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => 
    {
        const storedSongs = JSON.parse(localStorage.getItem('songs')) || [];
        setSongs(storedSongs);
    }, []);

    const handleLoadSongs = (artwork, title, artist, album, genre) => 
    {
      let updatedSongs;
      if (currentSong !== null)
      {
          // Edit existing song
          updatedSongs = songs.map((song, index) =>
              index === currentSong ? { artwork, title, artist, album, genre } : song
                                  );
      }
      else
      {         
          updatedSongs = [...songs, { artwork, title, artist, album, genre }];
      }

      setSongs(updatedSongs);
      localStorage.setItem('songs', JSON.stringify(updatedSongs));
      setCurrentSong(null);
    };

    const handleSearch = (event) => 
    {
        const searchTerm = event.target.value.toLowerCase();
        const storedSongs = JSON.parse(localStorage.getItem('songs')) || [];

        const filteredSongs = storedSongs.filter( song => 
            song.title.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm) ||
            song.album.toLowerCase().includes(searchTerm) ||
            song.genre.toLowerCase().includes(searchTerm)
        );

        setSongs(filteredSongs);
    };

    const handleDeleteSong = (index) =>
    {
      const updatedSongs = songs.filter((_, i) => i !== index);
      setSongs(updatedSongs);
      localStorage.setItem('songs', JSON.stringify(updatedSongs));
    };

    const handleEditSong = (index) => 
    {
      const song = songs[index];
      setCurrentSong(index);
      // Populate the form with the selected song's details
      document.getElementById('artwork').value = '';
      document.getElementById('title').value = song.title;
      document.getElementById('artist').value = song.artist;
      document.getElementById('album').value = song.album;
      document.getElementById('genre').value = song.genre;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div> Bookmark Application</div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        <button> <img src={logo} className="App-logo" alt="logo" />  
          Learn React </button></a> 
      </header>
      <main>  
        <div className="form-container">           
            <div className='form-header'>
              <strong>Search Songs: </strong>
              <input type="text" id="search" 
                placeholder="Search by title, artist, album or genre" 
                onChange={handleSearch} />
            </div>  

            <strong><u>Song List</u> ({songs.length } songs) </strong>  
            <div className="songs-list" id="songsList">                
                {
                  songs.map((song, index) => 
                  (
                    <div key={index} className="song-item">
                     <span>&#128189;</span>
                     
                      <div className="content ">
                        <div><strong>Title:</strong> {song.title}</div>
                        <div><strong>Artist:</strong> {song.artist}</div>
                        <div><strong>Album:</strong> {song.album}</div>
                        <div><strong>Genre:</strong> {song.genre}</div> 
                      </div>

                      <div>  
                        <div> 
                          <button className='btn mod' id='edit'
                             onClick={() => handleEditSong(index)}>
                          &#128393; </button>     

                          <button className='btn mod' id='delete'
                            onClick={() => handleDeleteSong(index)}>
                          &#128465; </button>
                        </div>

                        <img src={song.artwork} alt="&#128191;" width="100" />
                        </div>
                    </div>

                  ))
                }
            </div>           
        </div>         
        
        <LoadSongs handleLoadSongs={handleLoadSongs}/>
      </main>

    </div>
  );
}

export default BookmarkApp;
