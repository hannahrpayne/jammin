import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="searchResults">
      <h2>Results</h2>
      <TrackList 
      tracks={props.searchResults} 
      onAdd={props.onAdd} 
      isRemoval={false} />
    </div>
  );
};

export default SearchResults;
