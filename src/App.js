import React, { useState } from 'react'; 
import axios from 'axios';
import weather from './images/weather.gif';
import WeatherCard from './components/WeatherCard.js';
import WeatherCardSimplified from './components/WeatherCardSimplified.js';
import SearchBar from './components/SearchBar.js';
import { WEATHER_BASE_URL } from './url.js';
import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSearch = async (location) => {
    try {
      const weatherResponseCurrent = await axios.get(`${WEATHER_BASE_URL}/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
      const weatherCurrent = weatherResponseCurrent.data;
      setCurrentWeather(weatherCurrent);
      setLocation(weatherCurrent.name);
      const weatherResponseForecast = await axios.get(`${WEATHER_BASE_URL}/forecast/daily?q=${location}&cnt=6&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
      const weatherForecast = weatherResponseForecast.data.list;
      setForecastWeather(weatherForecast);
    } catch (error) {
      console.error(error);
    }
  }

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
          {location && <h2>Location: {location}</h2>}
        </div>
        <div className='weather-container'>
          {currentWeather  && forecastWeather && <WeatherCard currentData={currentWeather} forecastData={forecastWeather[0]}/>}

          <div className='weather-card-list'>
            {forecastWeather && 
              forecastWeather
                .slice(1)
                .map((data, index) => <WeatherCardSimplified key={index} data={data} />)}
          </div>
        </div>
      </div>

      <footer id="footer">
        <p>GitHub: <a href="https://github.com/">xyZ</a></p>
        <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
