import React, { Component } from "react";
import "./footer.css";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#000000",
          padding: "2px",
          minWidth: "500px"
        }}
      >
        <a href="https://www.github.com/FrancescoCommisso">
          <img style={{ margin: "5px" }} src={githubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/francesco-commisso-a1b560164/">
          <img style={{ margin: "5px" }} src={linkedInIcon} />
        </a>
      </div>
    );
  }
}

export default Footer;
