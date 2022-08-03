import { Component } from "react";

class Map extends Component {
  render() {
    return <img src={this.props.mapSource} alt="" />;
  }
}
export default Map;
