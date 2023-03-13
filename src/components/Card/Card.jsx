import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="card-image" />
      <h1 className="card-name">{props.name}</h1>
      <p className="card-info">{props.species}</p>
    </div>
  );
}
