import { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <>
        <h1>City Explorer!</h1>
        <form onSubmit={this.props.submitHandler}>
          <input type="text" id="searchQuery" />
          <button type="submit">Explore!</button>
        </form>
      </>
    );
  }
}
export default SearchForm;
