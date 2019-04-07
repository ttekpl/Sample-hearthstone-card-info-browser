import React from "react";
import "../styles/SearchBar.css";

const SearchBar = props => {
  return (
    <nav>
      <h1>HearthStone Data</h1>
      <h1 className="description">Search </h1>

      <form onSubmit={props.onSubmit}>
        <input type="text" id="search" onChange={props.onChange} />
      </form>
      <button onClick={props.onSubmit}>
        <i className="fas fa-search" />
      </button>
    </nav>
  );
};

export default SearchBar;
