import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchBar/SearchBar';
import Spotify from '/Users/gabrielcecchini/jamming/src/util/Spotify';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      SearchResults: ["", "", "", ""],
      playlistName: "name",
      playlistTracks: ["name", "artist", "album", "id"]
    };
    let SearchResults = this.state.SearchResults;
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.search=this.search.bind(this);
    let onSearch = SearchBar.search();
    this.addTrack=this.addTrack.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    else{
      playlistTracks.add(track);
      this.setState({playListTracks: playListTracks})
    }
  }
  removeTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      PlaylistTracks.remove(track);
      this.setState({playListTracks: playListTracks})
      return;
  }
}
  updatePlaylistName(name){
    this.setState.playlistName = name;
  }

  savePlaylist(){
    let trackURIs = [];
    trackURIs.add(this.state.playlistTracks);
    Spotify.savePlaylist(track.name(),track.uri());
    this.setState.playlistName = "New playlist";
    this.setState.playlistTracks = [];
    this.savePlaylist=this.savePlaylist.bind(this);
 }

  search(term){
    console.log(term);
    return[Spotify.search.id(term),Spotify.search.name(term),Spotify.search.artist(term),Spotify.search.album(term)];
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
        <li onSearch = {this.props.search}>
        </li>
          <div class="App-playlist">
            <li tracks = {this.props.searchResults.map(track)}
            name = {this.props.track.name}
            artist = {this.props.track.artist}
            album = {this.props.track.artist}>
            </li>
            <li playlistName = {this.state.playlistName}
            playlistTracks = {this.state.playlistTracks}>
            </li>
            <li tracks = {this.props.playlistTracks}>
            </li>
            <li onNameChange = {this.props.updatePlaylistName}>
            </li>
            <li onSave = {this.props.savePlaylist}>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
