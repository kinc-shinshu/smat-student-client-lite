import React, { Component } from "react";
import { Consumer } from "../Context";
import { TextInput, Container, Row, Col, Button } from "react-materialize";
import "materialize-css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examNumber: ""
    };
  }

  setExamNumber = e => {
    this.setState({ examNumber: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {({ setRoomNumber }) => (
          <Container>
            <Row>
              <Col className="offset-l4">
                <h3 className="blue-text">ラムダです</h3>
              </Col>
            </Row>
            <TextInput
              value={this.state.examNumber}
              onChange={this.setExamNumber}
              label={"部屋番号を入れてね"}
            />
            <Button onClick={() => setRoomNumber(this.state.examNumber)}>
              完了
            </Button>
          </Container>
        )}
      </Consumer>
    );
  }
}

export default Home;
