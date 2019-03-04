import React, { Component } from "react";
import "./skillscircle.css";

const style = {
  height: "80px",
  width: "80px",
  margin: "auto",
  backgroundColor: "transparent"
};

export class LogoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.skillID,
      margins: this.props.margins
    };
  }

  render() {
    return (
      <button
        onClick={() => this.props.onSelected(this.state.id)}
        className="btn btn-outline-light rounded-circle d-flex text-center align-middle"
        style={style}
      >
        <img className="align-middle mx-auto " src={this.props.icon} />
      </button>
    );
  }
}

export default LogoButton;
