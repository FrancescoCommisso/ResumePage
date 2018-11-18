import React, { Component } from "react";

export class Logo extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <img className="my-2  img-responsive" src={this.props.logo} />
      </div>
    );
  }
}

export default Logo;
