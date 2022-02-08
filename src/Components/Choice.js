import React, { Component } from "react";
import loading from "../assets/loading.gif";
export default class Choice extends Component {
  render() {
    let { name, image, setChoice, choosen, text, empty } = this.props;
    return (
      <div className="circle-wrapper">
        <div
          className={`outer-circle circle-${name} ${empty && "circle-blank"}`}
          onClick={() => {
            !choosen && setChoice(name, image);
          }}
        >
          {empty ? (
            <div className="inner-circle inner-empty">
              <img className="loading" src={loading} alt="loading" />
            </div>
          ) : (
            <div className="inner-circle">
              <img src={image} alt="choice" />
            </div>
          )}
        </div>
        {choosen && <div className="choice-text">{text}</div>}
      </div>
    );
  }
}
