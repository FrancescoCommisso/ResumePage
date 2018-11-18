import React, { Component } from "react";
import "./description.css";
const imgMyimageexample = require("../assets/bracketsStroke.svg");

const tag = {
  height: "500px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${imgMyimageexample})`,
  backgorundPosition: "center"
};
export default class Description extends Component {
  state = {
    animationPaused: false,
    red: ""
  };

  setClass = () => {};

  componentDidMount() {
    this.setState({
      animationPaused: true
    });
  }

  render() {
    return (
      <div>
        <div
          id="description-root"
          style={tag}
          className="p-lg-5  my-5 text-right"
        >
          <br />
          <br />
          <br />
          <br />
          <h1 className=" display-4 font-weight-bold text-light">
            My name is{" "}
          </h1>
          <h1 className=" d-inline display-4 font-weight-bold  black-red">
            Francesco
          </h1>
          <h1 className=" d-inline display-4 font-weight-bold text-light">,</h1>
          <h1 className=" display-4 font-weight-bold text-light">
            I make software.
          </h1>
          <p className="spaced-out faded">
            Front End / Back End / Cloud Solutions
          </p>
          <button class="btn btn-outline-light  whiteBTN">Contact Me</button>
        </div>
        <div className="text-center">
          <h5 style={{ opacity: ".5" }} className="text-light">
            S i t e . U n d e r . C o n s t r u c t i o n
          </h5>
        </div>
      </div>
    );
  }
}
