import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="container">
      <input type="text" placeholder="Filter by name..." />
      <img
        src="images/search-icon.png"
        alt="search-icon"
        className="search-icon"
      />
    </div>
  );
}
