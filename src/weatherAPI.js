const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const fetchHandler = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      let errorMessage = 'An error occurred';

      if (response.status === 404) {
        errorMessage = 'No data found. Please enter a valid city name.';
      } else if (response.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      } else {
        errorMessage = `Error: ${response.status} ${response.statusText}`;
      }

      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCurrentWeather = async (city) => {
  return fetchHandler(`/weather?q=${city}&appid=${apiKey}&units=metric`);
};

export const fetchForecastWeather = async (city, day = 6) => {
  return fetchHandler(`/forecast/daily?q=${city}&cnt=${day}&appid=${apiKey}&units=metric`);
};
