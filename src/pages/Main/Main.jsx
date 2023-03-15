import React, { useState } from "react";
import "./main.css";
import Search from "../../components/Search/Search";
import Cards from "../../components/Cards/Cards";
import axios from "axios";

export default function Main() {
  const [displayableCharacters, setDisplayableCharacters] = useState([]);
  let characters = [];
  axios.get("https://rickandmortyapi.com/api/character").then(handleResponse);
  function handleResponse(response) {
    characters = response.data.results;
    characters = characters.sort((x, y) => x.name - y.name);
    setDisplayableCharacters(characters.slice(0, 8));
  }

  return (
    <div className="container">
      <img src="images/title.png" alt="Rick and Morty" className="title-img" />
      <Search />
      <Cards value={displayableCharacters} />
    </div>
  );
}
