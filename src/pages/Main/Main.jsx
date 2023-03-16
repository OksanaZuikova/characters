import React, { useState, useEffect } from "react";
import "./main.css";
import Search from "../../components/Search/Search";
import Cards from "../../components/Cards/Cards";
import axios from "axios";

export default function Main() {
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem("characters")) || {
      allCharacters: [],
      displayableCharacters: [],
      isLoaded: false,
    }
  );

  if (!characters.isLoaded) {
    axios.get("https://rickandmortyapi.com/api/character").then(handleResponse);
  }

  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  function handleResponse(response) {
    let result = response.data.results;
    result = result.sort((x, y) => x.name.localeCompare(y.name));
    setCharacters({
      allCharacters: result,
      displayableCharacters: result.slice(0, 8),
      isLoaded: true,
    });
  }

  function filter(value) {
    let array = characters.allCharacters;
    let filteredArray = characters.allCharacters.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setCharacters({
      allCharacters: array,
      displayableCharacters: filteredArray.slice(0, 8),
      isLoaded: true,
    });
  }

  return (
    <div className="container">
      <img src="images/title.png" alt="Rick and Morty" className="title-img" />
      <Search method={filter} />
      <Cards value={characters.displayableCharacters} />
    </div>
  );
}
