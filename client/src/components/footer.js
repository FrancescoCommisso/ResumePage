import React, { Component } from "react";
import "./footer.css";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");
const je = 0;
class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        className="text-center"
        style={{
          backgroundColor: "#000000",
          padding: "2px"
        }}
      >
        <a href="https://www.github.com/FrancescoCommisso">
          <img className="footimg mx-1 my-1" src={githubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/francesco-commisso-a1b560164/">
          <img className="footimg mx-1 my-1" src={linkedInIcon} />
        </a>
      </div>
    );
  }
}

export default Footer;
