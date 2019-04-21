import React, { Component } from "react";
import "react-materialize";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exam {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Home;
