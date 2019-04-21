import React, { Component } from "react";
import "react-materialize";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h2>Exam {this.props.match.params.exam_id}</h2>
        <h1>Question {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Home;
