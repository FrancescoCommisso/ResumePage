import React, { Component } from "react";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

class Footer extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#000000", padding: "2px" }}>
        <img style={{ margin: "5px" }} src={linkedInIcon} />
        <img style={{ margin: "5px" }} src={githubIcon} />
      </div>
    );
  }
}

export default Footer;
