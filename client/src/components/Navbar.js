import React from "react";
import "../css/nav.css";

export const Navbar = (props) => {
  const searchChar = (e) => {
    e.preventDefault();
    props.search();
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">MARVEL</div>
        <p className="info">Character Search</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={props.searchInput}
        ></input>
        <button type="submit" onClick={searchChar}>
          Submit
        </button>
      </div>
      <a href="https://marvel.com" target="_blank" className="data-attribution">Data provided by Marvel. © 2014 Marvel</a>
    </>
  );
};
