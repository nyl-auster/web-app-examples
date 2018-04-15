import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      {" | "}
      <Link to="/hello">Hello !</Link>
    </nav>
  );
};
