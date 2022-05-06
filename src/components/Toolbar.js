import React from "react";

const Toolbar = (props) => {
  let setSearchQuery = props.setSearchQuery;
  let searchQuery = props.searchQuery;

  return (
    <div class="flex justify-start">
      <input
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        name="searchbar"
        id="input 1"
      />{" "}
    </div>
  );
};

export default Toolbar;
