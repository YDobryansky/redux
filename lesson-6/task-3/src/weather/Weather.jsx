import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';

import PropTypes from 'prop-types';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData()
  }

  render() {
    console.log(this.props)

    const { weatherData } = this.props;

    return (
      <div>
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {
            weatherData.map(item => (
              <li key={item.id} className='city'>
                <span className="city__name">{item.name}</span>
                <span className="city__temperature">{item.temperature} F</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Weather.propTypes = {
  weatherData: PropTypes.array.isRequired,
  getWeatherData: PropTypes.func.isRequired,
};

const mapState = state => ({
  weatherData: state.weatherData,
})

const mapDispatch = {
  getWeatherData
}

export default connect(mapState, mapDispatch)(Weather);


