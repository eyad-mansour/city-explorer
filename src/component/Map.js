import React from "react";
import axios from "axios";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationImg: "",
      cityInput: "",
      partOne: "GET /v1/search?key=YOUR_ACCESS_TOKEN&q=",
      partTwo: "&format=json",
    };
  }
  handleInput = async () => {
    const locationIqData = await axios.get(
      `${this.partOne}${this.state.cityInput}${this.partTwo}`
    );
    // GET /v1/search?key=YOUR_ACCESS_TOKEN&q={SEARCH_STRING}&format=json
    // console.log(pokemon.data.results);
    // this.setState({
    //   pokemon: locationIqData.data.results,
    // });
    console.log(locationIqData);
  };

  render() {
    return (
      <div className="App">
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <button onClick={this.getPokemon}>submit</button>
        {this.state.pokemon &&
          this.state.pokemon.map((item) => {
            return <li>{item.name}</li>;
          })}
      </div>
    );
  }
}
export default Map;
