import React, { useState } from 'react'; 
import search from '../images/search.png';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (input === "") {
      setError("Please enter a city name.");
      return;
    }

    onSearch(input);
    setInput("");
    setError("");
  }

  return(
    <div>
      <form className={error ? "search-bar search-bar-error" : "search-bar"} onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a city" name="searchInput" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit" aria-label="search"><img src={search} className="search-icon" aria-hidden="true" alt="search" /></button>
      </form>
      <div className="error-message">
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

export default SearchBar;