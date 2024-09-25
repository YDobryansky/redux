import React from "react";
import Weather from "./weather/Weather";
import { Provider } from 'react-redux';
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="weather">
        <Weather />
      </div>
    </Provider>
  )
};
export default App;

