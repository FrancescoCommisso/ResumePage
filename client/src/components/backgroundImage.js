import React, { Component } from "react";
const imgMyimageexample = require("../assets/bracketsStroke.svg");
const myPng = require("../assets/Logo1240x800.png");

export default class BackroundImage extends Component {
  componentWillMount() {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

    this.setState({ x: x, y: y });
  }
  state = {};
  render() {
    return (
      <div>
        <img className="bg" src={myPng} />
      </div>
    );
  }
}
