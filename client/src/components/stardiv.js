import React, { Component } from "react";
import star from "../assets/Star.svg";

export default class Stardiv extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < this.props.stars; i++) {
      stars.push(<img key={i} src={star} />);
    }
    return <span className="text-center">{stars}</span>;
  }
}
