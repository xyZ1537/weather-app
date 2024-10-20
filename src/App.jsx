import React, { useState } from 'react'; 
import weather from './images/weather.gif';
import WeatherCard from './components/WeatherCard';
import WeatherCardSimplified from './components/WeatherCardSimplified';
import SkeletonCard from './components/SkeletonCard';
import SearchBar from './components/SearchBar';
import { fetchCurrentWeather, fetchForecastWeather } from './weatherAPI.js';
import { useQueries } from "@tanstack/react-query";
import './App.css';

function App() {
  const [location, setLocation] = useState("London");

  const handleSearch = async (city) => {
    setLocation(city);
  };

  const [{ data: currentWeather, isLoading: isLoadingCurrent, error: errorCurrent },
    { data: forecastWeather, isLoading: isLoadingForecast, error: errorForecast }] = useQueries({
      queries: [
        {
          queryKey: ["currentWeather", location],
          queryFn: () => fetchCurrentWeather(location),
          staleTime: 5 * 60000,
          cacheTime: 10 * 60000,
        },
        {
          queryKey: ["forecastWeather", location],
          queryFn: () => fetchForecastWeather(location),
          staleTime: 30 * 60000,
          cacheTime: 60 * 60000,
        }
        ]
    })
  
  const error = errorCurrent?.message || errorForecast?.message;
  const isLoading = isLoadingCurrent || isLoadingForecast;

  return (
    <div className="App">
      <div className="header">
        <img src={weather} className="sun-animation" alt="weather cartoon animation" />
        <h1>
          HBO Weather Channel
        </h1>
      </div>

      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch}/>
      </div>

      <div className='content-container'>
        <div className='current-location'> 
          {error ? <h2>{error}</h2> : <h2>Location: {location}</h2>}
        </div>

        {!error && (
          <div className='weather-container'>
            { isLoading ? <SkeletonCard /> : 
              <WeatherCard currentData={currentWeather} forecastData={forecastWeather.list[0]} />
            }

            <div className='weather-card-list'>
              { isLoading ? <SkeletonCard isSimplified={true} number={5} /> :
                forecastWeather.list
                  .slice(1)
                  .map((data, index) => <WeatherCardSimplified key={index} data={data} />)
              }
            </div>
          </div>
        )}
      </div>

      <footer id="footer">
        <p>GitHub: <a href="https://github.com/">xyZ</a></p>
        <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
