import React from 'react'; 
import { render, screen } from '@testing-library/react';
import WeatherCardSimplified from '../src/components/WeatherCardSimplified';

const mockData = {
  "dt": 1729594800,
  "sunrise": 1729579011,
  "sunset": 1729615961,
  "temp": {
    "day": 14.54,
    "min": 9.36,
    "max": 15.72,
    "night": 12.85,
    "eve": 14.18,
    "morn": 9.48
  },
  "feels_like": {
    "day": 13.77,
    "night": 12.54,
    "eve": 13.74,
    "morn": 8.03
  },
  "pressure": 1029,
  "humidity": 66,
  "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }
  ],
  "speed": 5.11,
  "deg": 242,
  "gust": 9.99,
  "clouds": 17,
  "pop": 0.2,
  "rain": 0.11
};

describe('WeatherCardSimplified', () => {
  it('should render Weather Card Simplified and display correct forecast information', () => {
    render(<WeatherCardSimplified data={mockData}/>);
  
    expect(screen.getByText("22nd Tue")).toBeInTheDocument();
    expect(screen.getByAltText("light rain")).toBeInTheDocument();
    expect(screen.getByTestId("forecast-temp")).toHaveTextContent("H: 15°C L: 9°C");
  });
})
