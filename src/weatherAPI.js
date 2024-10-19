import { apiFetch } from './fetchHandler.js';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCurrentWeather = async (city) => {
  return apiFetch(`/weather?q=${city}&appid=${apiKey}&units=metric`);
};

export const fetchForecastWeather = async (city, day = 6) => {
  return apiFetch(`/forecast/daily?q=${city}&cnt=${day}&appid=${apiKey}&units=metric`);
};
