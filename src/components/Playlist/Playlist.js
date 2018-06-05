import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component{

  constructor(props){
    super(props);
    this.handleNameChange=this.handleNameChange.bind(this);
  }

 handleNameChange(input){
   const name = input.target.value;
   this.props.onChange(name);
 }
 isRemoval = false;

  render(){
    return(
     <div className="Playlist" onChange={this.handleNameChange()}>
     isRemoval = true;
      <input defaultValue={"New Playlist"}/>
      <li tracks = {this.props.playlistTracks}
      onRemove = {this.props.onRemove}>
      </li>
      <a className="Playlist-save">SAVE TO SPOTIFY onClick={this.props.onSave}</a>
     </div>
    );
  }
}
export default Playlist;
