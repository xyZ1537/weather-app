const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const apiFetch = async (endpoint, options = {}) => {
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
      } else if (response.status === 400) {
        errorMessage = 'Please enter a valid city name.';
      } else {
        errorMessage = `Error: ${response.status} ${response.statusText}`;
      }

      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};