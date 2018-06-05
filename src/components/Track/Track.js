import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
   super(props);
    this.removeTrack=this.removeTrack.bind(this);
 }

  render(){
    return(
      let renderAction;
      if(!renderAction){
        renderAction = '+'
      else{
        renderAction = '-'
       }
      }
      <div className="Track">
      <div className="Track-information">
       let track = this.props.tracks.map()
       <h3>{this.props.track.name}</h3>
       <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"{renderAction}
      onClick = {this.removeTrack}>
      </a>
      </div>

    );
  }
}

export default Track;
