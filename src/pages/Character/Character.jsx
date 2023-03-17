import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InfoItem from "../../components/InfoItem/InfoItem";
import BackLink from "../../components/BackLink/BackLink";
import "./character.css";

export default function Character() {
  const [character, setCharacter] = useState({});
  const id = useParams().id;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => setCharacter(response.data));
  });

  let originName;
  for (const key in character) {
    if (key === "origin") {
      originName = character[key].name;
    }
  }
  let type = character.type;
  if (type === "") {
    type = "Unknown";
  }
  return (
    <div>
      <div className="back-link">
        <BackLink />
      </div>
      <div className="character">
        <img
          src={character.image}
          alt={character.name}
          className="character-photo"
        />
        <h1 className="character-title">{character.name}</h1>
        <p className="subtitle">Informations</p>
        <InfoItem title="Gender" info={character.gender} />
        <InfoItem title="Status" info={character.status} />
        <InfoItem title="Specie" info={character.species} />
        <InfoItem title="Origin" info={originName} />
        <InfoItem title="Type" info={type} />
      </div>
    </div>
  );
}
