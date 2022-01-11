import React from "react";
import "../css/home.css";

export const Home = (props) => {
  let characters = props.cards;

  return (
    <div className="home-container">
      {characters.map((char) => (
        <div className="card">
          <h1 className="char-name">{char.name}</h1>
        </div>
      ))}
    </div>
  );
};
