import React, { Component } from "react";
import "./description.css";
const imgMyimageexample = require("../assets/Logo1240x800.svg");

const style1 = {
  position: "absolute"
};

export default class Description extends Component {
  state = {};

  render() {
    return (
      <div
        id="description-root"
        style={style1}
        className="p-lg-5 mx-auto my-5 text-center"
      >
        <h1 className=" display-6 font-weight-bold text-light">
          My name is <br /> Francesco, <br />I make software.
        </h1>
        <p class="spaced-out faded">Front End / Back End / Cloud Solutions</p>
        <button class="btn btn-outline-light  whiteBTN">Contact Me</button>
      </div>
    );
  }
}
