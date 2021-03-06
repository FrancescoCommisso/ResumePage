import React, { Component } from "react";
import "./skillscircle.css";

const blackBadge = {
  height: "100px",
  width: "100px",
  margin: "auto",
  backgroundColor: "#000000"
};

const pinkBadge = {
  height: "100px",
  width: "100px",
  margin: "auto",
  backgroundColor: "#f9186c"
};

const blackStroke = {
  filter: "brightness(0%)"
};
const pinkStroke = {};

function strokeColor(selected) {
  if (selected) return blackStroke;
  return pinkStroke;
}

export class SkillsCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      id: this.props.id,
      size: this.props.size
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected,
      id: nextProps.id
    });
  }

  badgeColor = selected => {
    if (this.state.size == null) {
      if (selected) return pinkBadge;
      return blackBadge;
    } else {
      return {
        height: this.state.size,
        width: this.state.size,
        margin: "auto",
        backgroundColor: "#000000"
      };
    }
  };

  handleSelectedChange = () => {
    const id = this.state.id;
    console.log(id);
    this.props.onSelected(id);
  };

  render() {
    return (
      <button
        onClick={this.handleSelectedChange}
        className="mybuttons btn btn-outline-light rounded-circle d-flex text-center align-middle"
        style={this.badgeColor(this.props.selected)}
      >
        <img
          style={strokeColor(this.props.selected)}
          className="align-middle mx-auto "
          src={this.props.icon}
        />
      </button>
    );
  }
}

export default SkillsCircle;
