import React, { Component } from "react";

const blackBadge = {
  height: "150px",
  width: "150px",
  margin: "auto",
  backgroundColor: "#000000"
};

const pinkBadge = {
  height: "150px",
  width: "150px",
  margin: "auto",
  backgroundColor: "#f9186c"
};

const blackStroke = {
  filter: "brightness(0%)"
};
const pinkStroke = {};

function badgeColor(selected) {
  console.log("selected: " + selected);
  if (selected) return blackBadge;
  return pinkBadge;
}
function strokeColor(selected) {
  console.log("selected: " + selected);
  if (selected) return pinkStroke;
  return blackStroke;
}

export class SkillsCircle extends Component {
  state = {
    selected: false
  };
  render() {
    return (
      <div
        onClick={() => {
          this.setState(prevState => ({
            selected: !prevState.selected
          }));
        }}
        className="rounded-circle d-flex text-center align-middle"
        style={badgeColor(this.state.selected)}
      >
        <img
          style={strokeColor(this.state.selected)}
          className="align-middle mx-auto "
          src={this.props.icon}
        />
      </div>
    );
  }
}

export default SkillsCircle;
