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
  isRemoval = true;ß

  render(){
    return(
      <div className="TrackList">
           <li onAdd = {this.props.onAdd}>
           </li>
           <li onRemove = {this.props.onRemove}>
           </li>
           removeTrack={this.props.onRemove(this.props.track)}
           onClick={this.addTrack}>
           {
             this.props.tracks.map(track => {
               return <Track track={track} />
             })
           }

      </div>
    );
  }
}

export default TrackList
