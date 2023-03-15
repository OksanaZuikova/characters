import React from "react";
import "./cards.css";
import Card from "../Card/Card";

export default function Cards(props) {
  return (
    <div className="cards">
      {props.value.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </div>
  );
}
