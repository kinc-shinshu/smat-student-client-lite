import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "./Context";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Question from "./pages/Question";

class Router extends Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      text: "Hello World",
      changeText: this.changeText
    };
  }

  changeText(text) {
    this.setState({ text: text });
  }

  render() {
    return (
      <BrowserRouter>
        <Provider value={this.state}>
          <Route exact path="/" component={Home} />
          <Route exact path="/exams/:id(\d+)" component={Exam} />
          <Route
            exact
            path="/exams/:exam_id(\d+)/questions/:id(\d+)"
            component={Question}
          />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Router;
