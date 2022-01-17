import React, { useEffect, useState } from "react";
import "../css/home.css";

export const Home = (props) => {
  const [characters, setCharacters] = useState([]);
  // const [hover, setHover] = useState(false);

  useEffect(() => {
    if (props.characters.length > 0) {
      setCharacters(props.characters);
    }
  }, [props.characters]);

  return (
    <div className="home-container">
      {characters.length > 0 ? (
        characters.map(char => (
          <div key={char.id} className="char-card">
          <img
            className="char-img"
            alt={char.name}
            src={`${char.thumbnail.path}/landscape_medium.jpg`}
          />
          <p className="char-name">{char.name}</p>
        </div>
      ))
        
      ) : (
        <div className="loading">
          Loading Characters
        </div>
      )}
    </div>
  );
};
