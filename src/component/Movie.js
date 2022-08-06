import React from "react";
import SingleMovie from "./SingleMovie";

class Movie extends React.Component {
  render() {
    return this.props.movie.map((item) => <SingleMovie movieData={item} />);
  }
}
export default Movie;
