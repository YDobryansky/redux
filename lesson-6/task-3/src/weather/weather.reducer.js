import { GET_WEATHER_DATA } from "./weather.actions";

const initialState = {
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
