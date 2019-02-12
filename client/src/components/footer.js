import React, { Component } from "react";
import "./footer.css";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

class Footer extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#000000", padding: "2px" }}>
        <a href="https://www.github.com/FrancescoCommisso">
          {" "}
          <img style={{ margin: "5px" }} src={githubIcon} />
        </a>
        <img className="hob" style={{ margin: "5px" }} src={linkedInIcon} />
      </div>
    );
  }
}

export default Footer;
