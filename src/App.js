import React, { useState } from 'react'; 
import weather from './images/weather.gif';
import WeatherCard from './components/WeatherCard.js';
import WeatherCardSimplified from './components/WeatherCardSimplified.js';
import SearchBar from './components/SearchBar.js';
import { fetchCurrentWeather, fetchForecastWeather } from './weatherAPI.js';
import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setError('');
    setLocation(city);
    setCurrentWeather(null);
    setForecastWeather(null);

    try {
      const currentData = await fetchCurrentWeather(city);
      const forecastData = await fetchForecastWeather(city);
      setCurrentWeather(currentData);
      setForecastWeather(forecastData.list);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img src={weather} className="sun-animation" alt="cartoon animation of a sun" />
        <h1>
          HBO Weather Channel
        </h1>
      </div>

      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch}/>
      </div>

      <div className='content-container'>
        <div className='current-location'>
          {location && !error && <h2>Location: {location}</h2>}
          {error && <h3>{error}</h3>}
        </div>

        {!error && currentWeather && forecastWeather &&
          <div className='weather-container'>
            <WeatherCard currentData={currentWeather} forecastData={forecastWeather[0]} />
          
            <div className='weather-card-list'>
              {forecastWeather
                .slice(1)
                .map((data, index) => <WeatherCardSimplified key={index} data={data} />)}
            </div>
          </div>
        }
      </div>

      <footer id="footer">
        <p>GitHub: <a href="https://github.com/">xyZ</a></p>
        <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
