import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "./Context";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Question from "./pages/Question";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider value={"Hello World"}>
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
