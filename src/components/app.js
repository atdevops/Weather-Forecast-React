import React, { Component } from 'react';
import SearchBar from '../contaniers/search_bar'
import WeatherList from '../contaniers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
