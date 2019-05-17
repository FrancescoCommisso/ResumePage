// HOME PAGE TITLE AND JOB DESCRIPTION
// WITHOUT BRACKETS SVG

import React, { Component } from "react";
import "./description.css";
import Scrollchor from "react-scrollchor";
const imgMyimageexample = require("../assets/bracketsStroke.svg");

const tag = {
  height: "500px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${imgMyimageexample})`,
  backgorundPosition: "center",
  backgroundPositionY: "20%",
  margin: "20px"
};
export default class DescriptionBrackets extends Component {
  state = {
    animationPaused: false
  };

  render() {
    return (
      <div>
        <div
          id="description-root"
          style={tag}
          className="p-lg-5 my-5 text-right"
        >
          <br />
          <br />
          <br />
          <br />

          <h1 className=" d-inline display-4 font-weight-bold  black-red">
            Francesco
          </h1>
          <h1 className=" display-4 font-weight-bold text-light">
            Full Stack
            <br />
            Developer
          </h1>
          <p className="spaced-out ">Front End / Back End / Cloud Solutions</p>
          {/* <Scrollchor to="#contact" class="btn whiteBTN">
            Contact Me
          </Scrollchor> */}
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
