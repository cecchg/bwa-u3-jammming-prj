import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component{

  let onAdd = this.props.onAdd;

  render(){
    return(
     <div className="SearchResults">
      <h2>Results</h2>
      <li onAdd = {this.props.onAdd}>
      </li>
     </div>
    );
  }
}
