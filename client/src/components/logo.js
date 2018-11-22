import React, { Component } from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "none"
};

export class Logo extends Component {
  state = {};
  render() {
    return (
      <button
        className="d-inline-block col btn btn-outline-light"
        style={style}
      >
        <img className="my-2  img-responsive" src={this.props.logo} />
      </button>
    );
  }
}

export default Logo;
