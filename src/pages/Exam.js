import React, { Component } from "react";
import { Consumer } from "../Context";
import "react-materialize";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exam {this.props.match.params.id}</h1>
        <Consumer>{text => <p>Context: {text}</p>}</Consumer>
      </div>
    );
  }
}

export default Home;
