// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  state = {
    astros: [],
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((result) => this.setState({ astros: result.people }));
  }

  render() {
    return <div></div>;
  }
}
