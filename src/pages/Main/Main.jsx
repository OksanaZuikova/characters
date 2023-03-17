import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import "./main.css";
import Search from "../../components/Search/Search";
import Cards from "../../components/Cards/Cards";
import axios from "axios";

export default function Main() {
  const [characters, setCharacters] = useState(
    JSON.parse(sessionStorage.getItem("characters")) || {
      allCharacters: [],
      displayableCharacters: [],
      length: 8,
      isLoaded: false,
    }
  );

  useEffect(() => {
    sessionStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  let result = [];
  function handleResponse(response) {
    result = result.concat(response.data.results);
    if (response.data.info.next) {
      axios.get(response.data.info.next).then(handleResponse);
    } else {
      result = result.sort((x, y) => x.name.localeCompare(y.name));
      setCharacters({
        allCharacters: result,
        filteredCharacters: result,
        displayableCharacters: result.slice(0, 8),
        length: 8,
        isLoaded: true,
      });
    }
  }

  function filter(value) {
    let array = characters.allCharacters;
    let filteredArray = characters.allCharacters.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setCharacters({
      allCharacters: array,
      filteredCharacters: filteredArray,
      displayableCharacters: filteredArray.slice(0, 8),
      length: 8,
      isLoaded: true,
    });
  }

  function showMore() {
    let index = characters.length + 8;
    let filteredArray = characters.filteredCharacters;
    let allCharacters = characters.allCharacters;
    setCharacters({
      allCharacters: allCharacters,
      filteredCharacters: filteredArray,
      displayableCharacters: filteredArray.slice(0, index),
      length: index,
      isLoaded: true,
    });
  }

  function isShowMore() {
    if (characters.filteredCharacters.length > characters.length) {
      return (
        <button onClick={showMore} className="showMore">
          Show more
        </button>
      );
    } else {
      return null;
    }
  }

  if (characters.isLoaded) {
    return (
      <div className="container">
        <img
          src="images/title.png"
          alt="Rick and Morty"
          className="title-img"
        />
        <Search method={filter} />
        <Cards value={characters.displayableCharacters} />
        <div className="button-container">{isShowMore()}</div>
      </div>
    );
  } else {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(handleResponse)
      .catch((error) => console.log(error.message));

    return (
      <Circles
        height="100"
        width="100"
        color="#00B0C8"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />
    );
  }
}
