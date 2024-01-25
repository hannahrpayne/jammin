import React, {useState, useCallback} from "react";
import './SearchBar.css';


const SearchBar = (props) => {
  const [term, setTerm] = useState("")

  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value)
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="SearchBar">
      <h1>
        Jammin
      </h1>
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button 
      className="SearchButton"
      onClick={search}
      >SEARCH</button>
    </div>
  );
}

export default SearchBar;