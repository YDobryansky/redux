import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    const { cities } = this.props;

    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {cities.map((city) => (
            <li key={city.id} className="city">
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{city.temperature} F</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = (state) => ({
  cities: state.weather.cities,
});

const mapDispatch = {
  getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);