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

  render(){
    return(
     <div className="Playlist" onChange={this.handleNameChange()}>
      <input defaultValue={"New Playlist"}/>
      let tracks = this.props.playlistTracks;
      let onRemove = this.props.onRemove;
      <a className="Playlist-save">SAVE TO SPOTIFY onClick={this.props.onSave}</a>
     </div>
    );
  }
}
export default Playlist;
