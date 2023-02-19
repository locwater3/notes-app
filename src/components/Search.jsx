import React from "react";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <img
        src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
        alt="search"
      />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Type to search.."
      />
    </div>
  );
}

export default Search;
