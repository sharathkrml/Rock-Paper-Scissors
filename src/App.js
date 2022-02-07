import "./App.scss";
import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    document.title = "Rock Paper Scissors";
  }
  render() {
    return <div>Hello world</div>;
  }
}
