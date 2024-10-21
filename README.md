# Weather Application



This is a responsive weather application built with React. It allows users to search for a city and view the current weather information as well as a 5-day forecast. Supported by OpenWeather API.

## Features
- Search for any city to view the current weather details: weather condition, temperature, wind speed and humidity.
- Displays a 5-day brief weather forecast for the selected city.
- Responsive design that works on both desktop and mobile devices.
- Loading skeletons for a better user experience.
- Caching response to improve performance.
- Error handling for bad input.

## Key Technologies
- **React**
- **React Query**
- **Vitest**

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/xyZ1537/weather-app.git
    cd hbo-weather
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Add Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add your [OpenWeather](https://openweathermap.org/) API key:
      ```env
      REACT_APP_WEATHER_API_KEY=your_api_key_here
      ```

4. **Run the Application**:
    ```bash
    npm start
    ```
    - This will start the app on `http://localhost:3000`.

5. **Build for Production**:
    ```bash
    npm run build
    ```
    - This will generate a `build` folder with optimized production-ready files.

6. **Running Tests**:
    ```bash
    npm test
    ```
    - Make sure the test scripts are correctly set in your `package.json`.

## Usage

- Open the app in your browser.
- Use the search bar to enter a city name and hit enter or click search button.
- View the current weather and 5-day forecast.
- Click on the weather icons to see more detailed information.

## License
This project is licensed under the MIT License.