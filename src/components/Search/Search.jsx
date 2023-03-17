import React, { useState, useEffect } from "react";
import "./search.css";

export default function Search(props) {
  const [value, setValue] = useState(sessionStorage.getItem("value") || "");

  useEffect(() => {
    sessionStorage.setItem("value", value);
  }, [value]);

  function handleChange(event) {
    setValue(event.target.value);
    props.method(event.target.value);
  }
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Filter by name..."
        value={value}
        onChange={handleChange}
      />
      <img
        src="images/search-icon.png"
        alt="search-icon"
        className="search-icon"
      />
    </div>
  );
}
