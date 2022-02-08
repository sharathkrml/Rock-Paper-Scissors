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
const WIN = [
  { user: "rock", random: "scissors" },
  { user: "scissors", random: "paper" },
  { user: "paper", random: "rock" },
];
export default class App extends Component {
  state = {
    showRule: false,
    choosen: false,
    empty: false,
    userChoice: {
      name: "",
      image: "",
    },
    randomChoice: {
      name: "",
      image: "",
    },
    gameStatus: "",
    score: 0,
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
      empty: true,
    });
  };
  resetSelection = () => {
    this.setState({
      choosen: false,
      empty: false,
      gameStatus: "",
    });
  };
  componentDidMount() {
    document.title = "Rock Paper Scissors";
  }
  componentDidUpdate() {
    const { userChoice, randomChoice, empty } = this.state;
    if (empty) {
      setTimeout(() => {
        if (userChoice.name === randomChoice.name) {
          this.setState({ empty: false, gameStatus: "DRAW MATCH" });
        } else {
          WIN.forEach((win) => {
            if (win.user === userChoice.name) {
              if (win.random === randomChoice.name) {
                console.log("won!!!!");
                this.setState((prevState) => ({
                  empty: false,
                  gameStatus: "YOU WON",
                  score: prevState.score + 1,
                }));
              } else {
                this.setState({ empty: false, gameStatus: "YOU LOST" });
              }
            }
          });
        }
      }, 1000);
    }
  }

  render() {
    const {
      showRule,
      choosen,
      userChoice,
      randomChoice,
      empty,
      gameStatus,
      score,
    } = this.state;
    console.log(score);
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
            <div className="score-value">{score}</div>
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
                empty={empty}
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
          {choosen ? (
            <div className="bottom-row bottom-relative">
              <div className="status">
                <div className="game-status">{gameStatus}</div>
                {!empty && (
                  <div onClick={this.resetSelection} className="play-again-btn">
                    PLAY AGAIN
                  </div>
                )}
              </div>
            </div>
          ) : (
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
