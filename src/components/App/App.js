import React, { useCallback, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Track from '../Track/Track';
import { Spotify } from '../../util/Spotify';



const App = (props) => {

  const [searchResults, setSearchResults] = useState([

        {
          track: 'Example Track Name', 
          artist: 'Example Track Artist', 
          album: 'Example Track Album',
          id: 1,
        },
        {
          track: 'Example Track Name 2', 
          artist: 'Example Track Artist 2', 
          album: 'Example Track Album 2',
          id: 2,
        },
      ]
  );

    const [playlistName, setPlaylistName] = useState(
    'New Playlist');

    const [playlistTracks, setPlaylistTracks] = useState([
      {
        track: 'Example Track Name', 
        artist: 'Example Track Artist', 
        album: 'Example Track Album',
        id: 1,
      },

      {
        track: 'Example Playlist Track Name', 
        artist: 'Example Playlist Track Artist', 
        album: 'Example Playlist Track Album',
        id: 3,
      },
      {
        track: 'Example Track Name 2', 
        artist: 'Example Track Artist 2', 
        album: 'Example Track Album 2',
        id: 4,
      },
    ]);

    const search = useCallback((term) => {
      Spotify.search(term).then(setSearchResults);
    }, []);

   const addTrack = useCallback(
    (track) =>{
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return (alert('Track Already Exists'));
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
    
   );;

   const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prevTracks) =>
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
   }, []);


    const updatePlaylistName = useCallback(
      (name) => {
        setPlaylistName(name);
      }, [])

    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("NewPlaylist");
        setPlaylistTracks([])
      })
    });




  return (
    <div>
      {/* <h1>
        Ja<span className="highlight">mm</span>ing
      </h1> */}
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
        <SearchResults  searchResults={searchResults} onAdd={addTrack} /> 
          {/* <!-- Add a Playlist component --> */}
        <Playlist 
          playlistTracks={playlistTracks} 
          playlistName={playlistName} 
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
          />
          
        {/* <Track  /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
