import React from 'react'
import { formatTimestamp } from '../utils.js';
import "./WeatherCardSimplified.css";

const WeatherCardSimplified = ({ data }) => {
  const date = formatTimestamp(data.dt);
  const minTemp = Math.floor(data.temp.min);
  const maxTemp = Math.floor(data.temp.max);
  const iconSrc = `${data.weather[0].icon}@2x.png`;

  return (
    <div className="card-container forecast-card">
      <p className="date">{date}</p>

      <div className="forecast-info">
        <img className="weather-icon" src={`https://openweathermap.org/img/wn/${iconSrc}`} alt="weather type"/>
        <p className="temp-range">H: {maxTemp}°C&ensp;L: {minTemp}°C</p>
      </div>
    </div>
  )
}

export default WeatherCardSimplified;
