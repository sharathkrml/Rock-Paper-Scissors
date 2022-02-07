import React, { Component } from "react";

export default class Choice extends Component {
  render() {
    let { name, image } = this.props;
    return (
      <div className="circle-wrapper">
        <div className={`outer-circle circle-${name}`}>
          <div className="inner-circle">
            <img src={image} alt="choice" />
          </div>
        </div>
        {/* <div className="choice-text">Your Choice</div> */}
      </div>
    );
  }
}
