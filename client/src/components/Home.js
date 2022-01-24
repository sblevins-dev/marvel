import React, { useEffect, useState } from "react";
import "../css/home.css";

export const Home = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      setCharacters(props.characters);
  }, [props.characters]);

  return (
    <div className="home-container">
      {characters.length > 0
        ? characters.map((char) => (
            <div
              key={char.id}
              className="char-card"
              onClick={() => props.setActive(char)}
            >
              <img
                className="char-img"
                alt={char.name}
                src={`${char.thumbnail.path}/landscape_medium.jpg`}
              />
              <p className="char-name">{char.name}</p>
            </div>
          ))
        : props.isSearching ? (
            <div className="loading">Loading Characters</div>
          ) : props.isDoneSearching && <div className="loading">No characters found</div>}
    </div>
  );
};
