import React, { Component } from "react";

const circleBadge = {
  height: "150px",
  width: "150px",
  margin: "auto",
  backgroundColor: "#000000"
};

export class SkillsCircle extends Component {
  state = {};
  render() {
    return (
      <div
        className="rounded-circle d-flex text-center align-middle "
        style={circleBadge}
      >
        <img className="align-middle mx-auto " src={this.props.icon} />
      </div>
    );
  }
}

export default SkillsCircle;
