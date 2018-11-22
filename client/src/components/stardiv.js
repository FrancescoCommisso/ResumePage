import React, { Component } from "react";
import star from "../assets/Star.svg";

export class Stardiv extends Component {
  state = {};
  render() {
    var stars = [];
    for (var i = 0; i < this.props.stars; i++) {
      stars.push(<img key={i} src={star} />);
    }
    return <span className="text-center">{stars}</span>;
  }
}

export default Stardiv;
