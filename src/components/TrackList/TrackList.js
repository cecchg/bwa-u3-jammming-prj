import React from 'react';
import './TrackList.css';

class TrackList extends React.Component{

  constructor(props){
    super(props);
    this.addTrack=this.addTrack.bind(this);
    let onAdd = this.props.onAdd;
    let addTrack = this.props.onAdd(this.props.track);
    let onRemove = this.props.onRemove;
    let removeTrack = this.props.onRemove(this.props.track);
  }

  render(){
    return(
      <div className="TrackList"
           onClick={this.addTrack}>
           let track = this.props.tracks.map()
           <h1>{this.props.track.name}</h1>
           <h1>{this.props.track.artist}</h1>
           <h1>{this.props.track.album}</h1>
      </div>
    );
  }
}

export default TrackList
