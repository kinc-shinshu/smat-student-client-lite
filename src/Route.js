import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/exams/:id(\d+)" component={Home} />
          <Route
            exact
            path="/exams/:exam_id/questions/:id(\d+)"
            component={Home}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
