import React from 'react'; 
import { render, screen } from '@testing-library/react';
import WeatherCard from '../src/components/WeatherCard';

const mockCurrentData = {
  "coord": {
      "lon": -3.1965,
      "lat": 55.9521
  },
  "weather": [
      {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 14.94,
      "feels_like": 14.29,
      "temp_min": 13.5,
      "temp_max": 15.71,
      "pressure": 989,
      "humidity": 69,
      "sea_level": 989,
      "grnd_level": 978
  },
  "visibility": 10000,
  "wind": {
      "speed": 11.83,
      "deg": 210
  },
  "clouds": {
      "all": 20
  },
  "dt": 1729434313,
  "sys": {
      "type": 2,
      "id": 2010172,
      "country": "GB",
      "sunrise": 1729407285,
      "sunset": 1729443598
  },
  "timezone": 3600,
  "id": 2650225,
  "name": "Edinburgh",
  "cod": 200
}

const mockForecastData = {
  "dt": 1729422000,
  "sunrise": 1729407285,
  "sunset": 1729443598,
  "temp": {
      "day": 13.9,
      "min": 8.6,
      "max": 14.84,
      "night": 12.56,
      "eve": 13.69,
      "morn": 10.08
  },
  "feels_like": {
      "day": 13.38,
      "night": 11.8,
      "eve": 12.94,
      "morn": 9.13
  },
  "pressure": 991,
  "humidity": 78,
  "weather": [
      {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
      }
  ],
  "speed": 14.41,
  "deg": 210,
  "gust": 24.76,
  "clouds": 82,
  "pop": 1,
  "rain": 2.33
}

describe('WeatherCard', () => {
  it('should render Weather Card and display correct current information', () => {
    render(<WeatherCard currentData={mockCurrentData} forecastData={mockForecastData}/>);
  
    expect(screen.getByText("20th Sun")).toBeInTheDocument();
    expect(screen.getByAltText("few clouds")).toBeInTheDocument();
    expect(screen.getByTestId("current-temp")).toHaveTextContent("14°C");
    expect(screen.getByTestId("today-temp")).toHaveTextContent("H: 14°C L: 8°C");
    expect(screen.getByTestId("current-wind")).toHaveTextContent("11.83 m/s");
    expect(screen.getByTestId("current-humidity")).toHaveTextContent("69 %");
  });
})
