import React from "react";
import "../css/character.css";

export const Character = ({ char, back }) => {
  const detailUrl = char.urls[1].url.split('?')[0];

  const handleClick = () => {
    window.open(detailUrl, "_blank");
  }

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
            src={`${char.thumbnail.path}/landscape_large.jpg`}
          />
        </div>
        {char.description !== "" ? (
          <div className="char-desc">
            <p>{char.description}</p>
            <br></br>
            <p className="char-link" onClick={handleClick}>Click here to view detail on marvel.com</p>
          </div>
        ) : (
          <div className="char-desc">
            <p className="char-link" onClick={handleClick}>Click here to view detail on marvel.com</p>
          </div>
        )}
      </div>
    </div>
  );
};
