import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Character } from "./components/Character";
import axios from 'axios';
import React, { useState } from "react";
import "./css/App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isCharActive, setIsCharActive] = useState(false);
  const [activeChar, setActiveChar] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [doneSearching, setIsDoneSearching] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const submit = () => {
    const name = searchInput;
    setIsSearching(true);
    const options = {
      method: "GET",
      url: "https://sb-marvel-backend.herokuapp.com/characterSearch",
      params: { nameStartsWith: name },
    };

    axios
      .request(options)
      .then((response) => {
        setIsCharActive(false)
        setCharacters(response.data)
        setIsSearching(false);
        setIsDoneSearching(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const char = (char) => {
    setIsCharActive(true);
    setActiveChar(char);
  }

  const backToHome = () => {
    setIsCharActive(false);
    setActiveChar();
  }

  return (
    <div className="App">
      <Navbar search={submit} searchInput={handleChange} />
      {!isCharActive && <Home characters={characters} setActive={char} isSearching={isSearching} isDoneSearching={doneSearching} /> }
      {isCharActive && <Character char={activeChar} back={backToHome} />}
    </div>
  );
}

export default App;
