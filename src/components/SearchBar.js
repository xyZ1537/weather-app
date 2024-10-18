import React, { useState } from 'react'; 
import search from '../images/search.png';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    console.log(`Form submitted, ${input}`); 
    event.preventDefault();
    onSearch(input);
    setInput("");
  }

  return(
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="input" placeholder="Search for a city" name="search" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit"><img src={search} className="search-icon" aria-hidden="true" alt="search" /></button>
      </form>
    </div>
  )
}

export default SearchBar;