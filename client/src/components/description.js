// HOME PAGE TITLE AND JOB DESCRIPTION
// WITHOUT BRACKETS SVG

import React, { Component } from "react";
import "./description.css";

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
        <div id="description-root" className="p-lg-5  my-5 text-center">
          <h1 className=" display-4 font-weight-bold text-light">
            Francesco Commisso, <br />
            Full Stack Developer.
          </h1>
          <p className="spaced-out">Front End / Back End / Cloud Solutions</p>
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
