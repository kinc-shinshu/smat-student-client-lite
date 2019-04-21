import React, { Component, createContext } from "react";

const Context = createContext();
export const { Provider, Consumer } = Context;

export class Store extends Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.setRoomNumber = this.setRoomNumber.bind(this);
    this.state = {
      text: "Hello World",
      changeText: this.changeText,
      setRoomNumber: this.setRoomNumber,
      roomNumber: ""
    };
  }

  setRoomNumber(roomNumber) {
    this.setState({ roomNumber: roomNumber });
  }
  changeText(text) {
    this.setState({ text: text });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default Context;
