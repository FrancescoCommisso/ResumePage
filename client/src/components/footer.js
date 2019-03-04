import React, { Component } from "react";
import "./footer.css";
import { Logos } from "./logos";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

const footerIcons = [
  { logo: linkedInIcon, id: "1" },
  { logo: githubIcon, id: "2" }
];

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        className="text-center container-fluid "
        style={{
          position: "relative",
          backgroundColor: "#000000",
          padding: "2px",
          color: "#ffffff"
        }}
      >
        <span
          className="my-2  d-inline align-middle"
          style={{
            position: "absolute",
            left: "60",
            padding: "1px",
            right: "0",
            fontSize: "16px",
            top: "0",
            bottom: "0",
            zIndex: "3"
          }}
        >
          Francesco Commisso © 2018
        </span>

        <Logos logos={footerIcons} margins={0} />
        {/* <div className="row ">
          <a
            className="d-inline-block col-1 mx-1 my-1"
            href="https://www.github.com/FrancescoCommisso"
          >
            <img style={{ height: "30px" }} src={githubIcon} />
          </a>
          <a
            className="d-inline-block col-1 mx-1 my-1"
            href="https://www.linkedin.com/in/francesco-commisso-a1b560164/"
          >
            <img style={{ height: "30px" }} src={linkedInIcon} />
          </a>
        </div> */}
      </div>
    );
  }
}

export default Footer;
