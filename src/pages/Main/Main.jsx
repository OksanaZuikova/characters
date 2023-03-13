import React from "react";
import "./main.css";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";

export default function Main() {
  return (
    <div className="container">
      <img src="images/title.png" alt="Rick and Morty" className="title-img" />
      <Search />
      <Card />
    </div>
  );
}
