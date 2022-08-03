import { Component } from "react";
import "./App.css";
import SearchForm from "./component/SearchForm";
import axios from "axios";
import DisplayedInformation from "./component/DiplayedInformation";
import Map from "./component/Map";
import ErrorComp from "./component/ErrorComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      latitude: "",
      longitude: "",
      map_src: "",
      displayInfo: false,
      errorMsg: "",
      displayErr: false,
    };
  }

  displayLocation = async (e) => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;

    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${searchQuery}&format=json`;

    // console.log(url)
    try {
      const city = await axios.get(url);
      // console.log(city)
      // take data from the api and save it in variable
      this.setState({
        display_name: city.data[0].display_name,
        latitude: city.data[0].lat,
        longitude: city.data[0].lon,
        displayInfo: true,
        displayErr: false,
      });
      // fucntion to send the data
      this.displayMap(city.data[0].lat, city.data[0].lon);
      this.displayWeather(searchQuery, city.data[0].lat, city.data[0].lon);
      this.fetchMovies(searchQuery);
    } catch (error) {
      // if the try didnt work catch will get the error and send it
      console.log(error);
      this.setState({
        displayInfo: false,
        displayErr: true,
        errorMsg: error.response.status + ": " + error.response.data.error,
      });
    }
  };
  // take the url add lat and lon add the key from location IQ and save it to map_src
  displayMap = (lat, lon) => {
    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&zoom=18`;
    console.log(mapSrc);
    this.setState({
      map_src: mapSrc,
    });
  };
  render() {
    return (
      <div className="App">
        <SearchForm submitHandler={this.displayLocation} />
        {this.state.displayInfo && (
          <>
            <DisplayedInformation cityInfo={this.state} />
            <Map mapSource={this.state.map_src} />
          </>
        )}
        {this.state.displayErr && <ErrorComp error={this.state.errorMsg} />}
      </div>
    );
  }
}
// in the search form we get the give the displaylocaton function variable and send the farable to search form through the submitHandler

export default App;
