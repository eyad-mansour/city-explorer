import React, { Component } from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherInformation.map((item) => (
          <WeatherDay dayData={item} />
        ))}
      </>
    );
  }
}

export default Weather;
