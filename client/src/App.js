import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import axios from 'axios';
import React, { useState } from "react";
import "./css/App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const submit = () => {
    const name = searchInput;
    const options = {
      method: "GET",
      url: "https://sb-marvel-backend.herokuapp.com/characterSearch",
      params: { nameStartsWith: name },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data)
        setCharacters(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Navbar search={submit} searchInput={handleChange} />
      <Home characters={characters} />
    </div>
  );
}

export default App;
