import "./App.scss";
import React, { Component } from "react";
import logo from "./assets/logo.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";
import rules from "./assets/image-rules.svg";
import closeBtn from "./assets/icon-close.svg";

import Choice from "./Components/Choice";

const CHOICES = [
  { name: "rock", image: rock },
  { name: "paper", image: paper },
  { name: "scissors", image: scissors },
];
export default class App extends Component {
  state = {
    showRule: false,
    choosen: false,
    userChoice: {
      name: "",
      image: "",
    },
    randomChoice: {
      name: "",
      image: "",
    },
  };
  toggleRule = () => {
    this.setState((prevState) => ({ showRule: !prevState.showRule }));
  };
  setChoice = (s, img) => {
    let index = Math.floor(Math.random() * 3);
    let userChoice = {
      name: s,
      image: img,
    };
    this.setState({
      userChoice: userChoice,
      randomChoice: CHOICES[index],
      choosen: true,
    });
  };
  componentDidMount() {
    document.title = "Rock Paper Scissors";
  }

  render() {
    const { showRule, choosen, userChoice, randomChoice } = this.state;
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
        <main className={`main ${choosen && "main-transparent"}`}>
          <div className="top-row">
            {choosen ? (
              <Choice
                name={userChoice.name}
                image={userChoice.image}
                setChoice={this.setChoice}
                choosen={choosen}
                text="YOU PICKED"
              />
            ) : (
              <Choice
                name="paper"
                image={paper}
                setChoice={this.setChoice}
                choosen={choosen}
                text="YOU PICKED"
              />
            )}
            {choosen ? (
              <Choice
                name={randomChoice.name}
                image={randomChoice.image}
                setChoice={this.setChoice}
                choosen={choosen}
                text="THE HOUSE PICKED"
                // empty
              />
            ) : (
              <Choice
                name="scissors"
                image={scissors}
                setChoice={this.setChoice}
                choosen={choosen}
                text="THE HOUSE PICKED"
              />
            )}
          </div>
          {!choosen && (
            <div className="bottom-row">
              <Choice
                name="rock"
                image={rock}
                setChoice={this.setChoice}
                choosen={choosen}
                text=""
              />
            </div>
          )}
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
