import "./App.scss";
import React, { Component } from "react";
import logo from "./assets/logo.svg";
export default class App extends Component {
  componentDidMount() {
    document.title = "Rock Paper Scissors";
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} alt="logo" />
          <div className="score-card">
            <div className="score-title">SCORE</div>
            <div className="score-value">12</div>
          </div>
        </header>
      </div>
    );
  }
}
