import React from "react";
import "../css/character.css";

export const Character = ({ char, back }) => {
  console.log(char);
  return (
    <div id={char.id} className="char-container">
      <button className="back-btn" onClick={() => back()}>
        Back
      </button>
      <div className="char-header-wrapper">
        <div className="char-header">
          <h1 className="char-header-name">{char.name}</h1>
          <img
            className="char-img"
            alt={char.name}
            src={`${char.thumbnail.path}/landscape_incredible.jpg`}
          />
        </div>
        {char.description != "" ? (
          <p className="char-desc">{char.description}</p>
        ) : (
          <p className="char-desc">No Description</p>
        )}
      </div>
    </div>
  );
};
