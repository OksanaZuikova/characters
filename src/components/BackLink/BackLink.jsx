import React from "react";
import { Link } from "react-router-dom";
import "./backLink.css";

export default function BackLink() {
  return (
    <Link to="/" className="link">
      <img src="../images/arrow-icon.png" alt="arrow" />
      <p className="link-title">GO BACK</p>
    </Link>
  );
}
