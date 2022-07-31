import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "no user input yet",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let userInput = e.target.userInput.value;
    this.setState({
      userInput: userInput,
    });
    console.log(e.target.userInput.value);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="userInput">Enter City Name</label>
          <input type="text" id="userInput" placeholder="city" />
          <Button variant="primary" type="submit">
            Explore
          </Button>
          <p>{this.props.locationIqData}</p>
        </Form>
      </>
    );
  }
}
export default Forms;
