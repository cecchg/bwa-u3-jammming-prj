import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchBar/SearchBar';
import Spotify from 'C:/Users/cecchg/jamming/src/util/Spotify';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResults: ["name", "artist", "album", "id"]
    };
    let SearchResults = this.state.Spotify.search;
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.search=this.search.bind(this);
    let onSearch = SearchBar.search();
    let onNameChange = Playlist.updatePlaylistName();
    let onSave = Playlist.savePlaylist();
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      Playlist.add(track);
      return;
    }
    this.addTrack=this.addTrack.bind(this);
  }
  removeTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      Playlist.remove(track);
      return;
  }
}
  updatePlaylistName(name){
    this.state.playlistName = name;
  }

  savePlaylist(){
    let trackURIs = [];
    trackURIs.add(this.state.playlistTracks);
    Spotify.savePlaylist();
    this.state.playlistName = "New playlist";
    let playlistTracks = [];
    this.savePlaylist=this.savePlaylist.bind(this);
 }

  search(term){
    console.log(term);
  }

  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          <div className="App-playlist">
          let playlistName = this.state.playlistName;
          let playlistTrack = this.state.playlistTrack;
          </div>
        </div>
     </div>
</div>
    );
  }
}
export default App;
