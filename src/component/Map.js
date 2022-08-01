import React from "react";
import { Component } from "react";

class Map extends Component {
  render() {
    return (
      <>
        <img src={this.props.map_src} alt={this.props.city} />
      </>
    );
  }
}
export default Map;
