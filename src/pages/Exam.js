import React, { Component } from "react";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";
import "react-materialize";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exam {this.props.match.params.id}</h1>
        <Consumer>{({ text }) => <p>Context: {text}</p>}</Consumer>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Home;
