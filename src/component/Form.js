import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Map from "./Map";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      city: "",
      map: "",
      display_name: "",
      latitude: "",
      longtiude: "",
      displayError: false,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cityData = await axios.get(
        `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${e.target.userInput.value}&format=json`
      );

      this.setState({
        // userInput: e.target.userInput.value,
        city: e.target.city.value,
        display_name: cityData.data[0].dispaly_name,
        latitude: cityData.data[0].lat,
        longtiude: cityData.data[0].lon,
        displayError: false,
      });
    } catch (error) {
      this.setState({
        displayError: true,
        errorMessage: error.response.status,
        displayName: "",
      });
    }
  };

  render() {
    return (
      <>
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="userInput">Enter City Name</label>
          <input type="text" id="userInput" placeholder="city" />
          <Button variant="primary" type="submit">
            Explore
          </Button>
        </Form>
        {this.state.dispaly_name && (
          <>
            <p>city Name: {this.state.display_name}</p>
            <p>city latitude: {this.state.latitude}</p>
            <p>city longtiude: {this.state.longtiude}</p>
            <Map
              map_src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.latitude},${this.state.longtiude}&zoom=18`}
              city={this.state.display_name}
            />
          </>
        )}
      </>
    );
  }
}
export default Forms;
