export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const getWeatherData = () => {
  return async (dispatch) => {
    const response = await fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities');
    const data = await response.json();
    dispatch({
      type: GET_WEATHER_DATA,
      payload: data,
    });
  };
};