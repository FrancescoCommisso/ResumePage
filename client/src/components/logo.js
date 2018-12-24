import React, { Component } from "react";

const style = {
  width: "50vw",
  height: "50vw",
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
        <img
          style={{ opacity: ".5" }}
          className="my-2  img-responsive"
          src={this.props.logo}
        />
      </button>
    );
  }
}

export default Logo;
