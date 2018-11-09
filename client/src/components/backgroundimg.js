import React, { Component } from "react";
import Description from "./description.js";
const imgMyimageexample = require("../assets/Logo1240x800.svg");

const divStyle = {
  height: "800px",
  position: "absolute",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: "cover"
};
const divStyle1 = {
  height: "auto",
  maxWidth: "100%"
};

export default class Backgroundimg extends Component {
  render() {
    return <img className="" src={imgMyimageexample} />;
  }
}
