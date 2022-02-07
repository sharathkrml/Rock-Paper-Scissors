import React, { Component } from "react";

export default class Choice extends Component {
  render() {
    let { name, image, setChoice, choosen, text, empty } = this.props;
    return (
      <div className="circle-wrapper">
        <div
          className={`outer-circle circle-${name} ${empty && "circle-blank"}`}
          onClick={() => setChoice(name, image)}
        >
          {!empty && (
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
