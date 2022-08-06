import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <li>
        {this.props.dayData.date} : {this.props.dayData.descriptioin}
      </li>
    );
  }
}
export default WeatherDay;
