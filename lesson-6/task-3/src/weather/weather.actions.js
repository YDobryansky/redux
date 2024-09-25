export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';
import { getWeatherDataReceived } from "./weather.gateway";

export const getWeatherData = () => {
  return (dispatch) => {
    getWeatherDataReceived()
      .then(data => {
        dispatch({
          type: WEATHER_DATA_RECEIVED,
          payload: {
            weatherData: data,
          },
        });
      })
      .catch(err => {
        console.error("Failed to fetch weather data", err);
      });
  };
}
