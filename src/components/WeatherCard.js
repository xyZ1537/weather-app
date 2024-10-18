import React from 'react';
import { formatTimestamp } from '../utils.js';
import temperatureIcon from '../images/temperature.png';
import humidityIcon from '../images/humidity.png';
import windIcon from '../images/wind.png';
import { ICON_BASE_URL } from '../url.js';
import "./WeatherCard.css";

const WeatherCard = ({ currentData, forecastData }) => {
  const date = formatTimestamp(currentData.dt);
  const currentTemp = Math.floor(currentData.main.temp);
  const minTemp = Math.floor(forecastData.temp.min);
  const maxTemp = Math.floor(forecastData.temp.max);
  const wind = currentData.wind.speed;
  const humidity = currentData.main.humidity;
  const iconSrc = `${currentData.weather[0].icon}@2x.png`;

  return (
    <div className="card-container">
      <p className="date">{date}</p>

      <div className="basic-info">
        <img className="weather-icon" src={`${ICON_BASE_URL}/${iconSrc}`} alt="weather type"/>
        <p className="current-temp">{currentTemp}°C</p>
      </div>

      <div className="extra-info">
        <div className="info-container">
          <img className="extra-icon" src={temperatureIcon} alt="temperature range"/>
          <p className="temp-range">H: {maxTemp}°C&ensp;L: {minTemp}°C</p>
        </div>
        <div className="info-container">
          <img className="extra-icon" src={windIcon} alt="wind"/>
          <p className="wind">Wind: {wind} m/s</p>
        </div>
        <div className="info-container">
          <img className="extra-icon" src={humidityIcon} alt="humidity"/>
          <p className="humidity">Humidity: {humidity} %</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
