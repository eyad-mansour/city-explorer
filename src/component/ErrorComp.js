import { Component } from "react";

class ErrorComp extends Component {
  render() {
    return <p>{this.props.error}</p>;
  }
}
export default ErrorComp;
