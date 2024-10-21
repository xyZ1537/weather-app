import React from 'react'; 
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../src/App';

global.fetch = vi.fn();

const queryClient = new QueryClient();

const renderWithClient = (page) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {page}
    </QueryClientProvider>
  );
};

const mockCurrentDataLDN = {
  "coord": {
      "lon": -0.1257,
      "lat": 51.5085
  },
  "weather": [
      {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 15.17,
      "feels_like": 14.94,
      "temp_min": 13.81,
      "temp_max": 15.98,
      "pressure": 1011,
      "humidity": 84,
      "sea_level": 1011,
      "grnd_level": 1007
  },
  "visibility": 10000,
  "wind": {
      "speed": 5.66,
      "deg": 210
  },
  "clouds": {
      "all": 99
  },
  "dt": 1729447761,
  "sys": {
      "type": 2,
      "id": 2075535,
      "country": "GB",
      "sunrise": 1729406002,
      "sunset": 1729443406
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
}

const mockForecastDataLDN = {
  "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
          "lon": -0.1257,
          "lat": 51.5085
      },
      "country": "GB",
      "population": 1000000,
      "timezone": 3600
  },
  "cod": "200",
  "message": 0.0290174,
  "cnt": 6,
  "list": [
      {
          "dt": 1729422000,
          "sunrise": 1729406002,
          "sunset": 1729443406,
          "temp": {
              "day": 15.03,
              "min": 12.01,
              "max": 17.31,
              "night": 13.86,
              "eve": 15.38,
              "morn": 13.36
          },
          "feels_like": {
              "day": 14.96,
              "night": 13.16,
              "eve": 15.09,
              "morn": 12.84
          },
          "pressure": 1008,
          "humidity": 91,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "speed": 8.98,
          "deg": 204,
          "gust": 19.4,
          "clouds": 100,
          "pop": 1,
          "rain": 0.88
      },
      {
          "dt": 1729508400,
          "sunrise": 1729492507,
          "sunset": 1729529683,
          "temp": {
              "day": 14.45,
              "min": 12.31,
              "max": 14.98,
              "night": 12.39,
              "eve": 13.66,
              "morn": 12.67
          },
          "feels_like": {
              "day": 13.33,
              "night": 11.67,
              "eve": 12.6,
              "morn": 11.82
          },
          "pressure": 1023,
          "humidity": 53,
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "speed": 6,
          "deg": 232,
          "gust": 14.07,
          "clouds": 100,
          "pop": 0
      },
      {
          "dt": 1729594800,
          "sunrise": 1729579011,
          "sunset": 1729615961,
          "temp": {
              "day": 14.17,
              "min": 9.69,
              "max": 15.82,
              "night": 13.32,
              "eve": 14.19,
              "morn": 10.05
          },
          "feels_like": {
              "day": 13.29,
              "night": 12.98,
              "eve": 13.73,
              "morn": 9.33
          },
          "pressure": 1028,
          "humidity": 63,
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "speed": 5.03,
          "deg": 243,
          "gust": 8.95,
          "clouds": 23,
          "pop": 0
      },
      {
          "dt": 1729681200,
          "sunrise": 1729665516,
          "sunset": 1729702241,
          "temp": {
              "day": 15.56,
              "min": 10.67,
              "max": 16.65,
              "night": 11.72,
              "eve": 14.08,
              "morn": 10.9
          },
          "feels_like": {
              "day": 15.08,
              "night": 10.98,
              "eve": 13.48,
              "morn": 10.55
          },
          "pressure": 1031,
          "humidity": 73,
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "speed": 3.66,
          "deg": 206,
          "gust": 8.07,
          "clouds": 27,
          "pop": 0
      },
      {
          "dt": 1729767600,
          "sunrise": 1729752021,
          "sunset": 1729788521,
          "temp": {
              "day": 15.97,
              "min": 10.05,
              "max": 16.15,
              "night": 15,
              "eve": 14.08,
              "morn": 10.05
          },
          "feels_like": {
              "day": 15.29,
              "night": 14.85,
              "eve": 13.68,
              "morn": 9.28
          },
          "pressure": 1018,
          "humidity": 64,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "sky is clear",
                  "icon": "01d"
              }
          ],
          "speed": 4.8,
          "deg": 165,
          "gust": 13.66,
          "clouds": 0,
          "pop": 0
      },
      {
          "dt": 1729854000,
          "sunrise": 1729838526,
          "sunset": 1729874803,
          "temp": {
              "day": 13.23,
              "min": 11.05,
              "max": 14.89,
              "night": 11.05,
              "eve": 11.98,
              "morn": 11.54
          },
          "feels_like": {
              "day": 12.33,
              "night": 10.04,
              "eve": 11.06,
              "morn": 11
          },
          "pressure": 1015,
          "humidity": 66,
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10d"
              }
          ],
          "speed": 4.22,
          "deg": 219,
          "gust": 11.27,
          "clouds": 100,
          "pop": 1,
          "rain": 5.59
      }
  ]
}

describe('Weather application main page integration tests', () => {
  beforeEach(() => {
    fetch.mockClear();
    queryClient.clear();
  });

  it('should render main page correctly when first landing', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockCurrentDataLDN
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockForecastDataLDN
      });

      renderWithClient(<App />);
      
    await waitFor(() => {
      expect(screen.getByText("20th Sun")).toBeInTheDocument();
    });
      
    expect(screen.getByAltText("scattered clouds")).toBeInTheDocument();
    expect(screen.getByTestId("current-temp")).toHaveTextContent("15°C");
    expect(screen.getByTestId("today-temp")).toHaveTextContent("H: 17°C L: 12°C");
    expect(screen.getByTestId("current-wind")).toHaveTextContent("5.66 m/s");
    expect(screen.getByTestId("current-humidity")).toHaveTextContent("84 %");

    const forecastCards = screen.getAllByTestId("weather-card-simplified");
    expect(forecastCards.length).toBe(5);
    expect(screen.getByText("23rd Wed")).toBeInTheDocument();
    expect(screen.getByAltText("sky is clear")).toBeInTheDocument();

    expect(forecastCards[1]).toHaveTextContent("H: 15°C L: 9°C");
    expect(forecastCards[4]).toHaveTextContent("H: 14°C L: 11°C");
  })
})