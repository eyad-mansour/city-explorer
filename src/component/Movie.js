import React from "react";

class Movie extends React.Component {
  render() {
    return this.props.movie.map((item) => (
      <>
        <p>{item.title}</p>
        <p>{item.released_on}</p>
        <p>{item.popularity}</p>
      </>
    ));
  }
}
export default Movie;
