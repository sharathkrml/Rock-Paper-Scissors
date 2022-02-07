import "./App.scss";
import React, { Component } from "react";
import logo from "./assets/logo.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";

import Choice from "./Components/Choice";
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
        {/* main-transparent */}
        <main className="main ">
          <div className="top-row">
            <Choice name="paper" image={paper} />
            <Choice name="scissors" image={scissors} />
          </div>
          <div className="bottom-row">
            <Choice name="rock" image={rock} />
          </div>
        </main>
        <footer className="footer">
          <button className="rules">RULES</button>
        </footer>
      </div>
    );
  }
}
