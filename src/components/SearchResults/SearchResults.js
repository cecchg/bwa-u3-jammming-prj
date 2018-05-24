import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component{

  let onAdd = this.props.onAdd;

  render(){
    return(
     <div className="SearchResults">
      <h2>Results</h2>
      <tracks = this.props.SearchResults.map()>
      <{this.props.track.name}>
      <{this.props.track.artist}>
      <{this.props.track.album}>
     </div>
    );
  }
}
