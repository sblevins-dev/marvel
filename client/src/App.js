import { Navbar } from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Characters } from "./components/Characters";
import { useState, useEffect } from 'react';
import "./css/App.css";

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [characters, setCharacters] = useState([]);


  const fetchChar = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setCharacters(data)
  }

  useEffect(() => {
    fetchChar();
  }, [])
  
  const handleChange = e => {
    setSearchInput(e.target.value);
  }

  const filteredChar = characters.filter(char => {
    return (
      char.name.toLowerCase().includes(searchInput.toLowerCase())
    )
  })

  return (
    <div className="App">
      <Router>
        <Navbar search={handleChange} />
        <Routes>
          <Route exact path="/" element={<Home cards={filteredChar}/>} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
