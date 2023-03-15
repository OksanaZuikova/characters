import React from "react";
import "./infoItem.css";

export default function InfoItem(props) {
  return (
    <div className="information">
      <h2 className="info-title">{props.title}</h2>
      <p className="info-value">{props.info}</p>
    </div>
  );
}
