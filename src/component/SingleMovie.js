import React from "react";

class SingleMovie extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.movieData.title}</p>
        <p>{this.props.movieData.released_on}</p>
        <p>{this.props.movieData.popularity}</p>
      </>
    );
  }
}
export default SingleMovie;
