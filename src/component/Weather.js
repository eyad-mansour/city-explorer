import React, { Component } from "react";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherInformation.map((item) => (
          <li>
            {item.date} : {item.descriptioin}
          </li>
        ))}
      </>
    );
  }
}
export default Weather;
