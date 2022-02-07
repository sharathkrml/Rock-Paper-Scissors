import "./App.scss";
import React, { Component } from "react";
import logo from "./assets/logo.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";
import rules from "./assets/image-rules.svg";
import closeBtn from "./assets/icon-close.svg";

import Choice from "./Components/Choice";
export default class App extends Component {
  state = {
    showRule: false,
  };
  toggleRule = () => {
    this.setState((prevState) => ({ showRule: !prevState.showRule }));
    // console.log("web");
  };
  componentDidMount() {
    document.title = "Rock Paper Scissors";
  }
  render() {
    const { showRule } = this.state;
    return (
      <div className="App">
        {showRule && (
          <div className="rules-modal">
            <div className="rules-header">
              <h2>RULES</h2>
              <img
                className="btn-fullScreen"
                onClick={this.toggleRule}
                src={closeBtn}
                alt="close"
              />
            </div>
            <div className="rule-wrapper">
              <img className="rule-img" src={rules} alt="rules" />
            </div>
            <div className="rule-wrapper">
              <img
                className="btn-mobile"
                onClick={this.toggleRule}
                src={closeBtn}
                alt="close"
              />
            </div>
          </div>
        )}
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
          <button onClick={this.toggleRule} className="rules">
            RULES
          </button>
        </footer>
      </div>
    );
  }
}
