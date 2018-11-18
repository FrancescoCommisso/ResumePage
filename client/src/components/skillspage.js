import React, { Component } from "react";
import "./skillspage.css";
import { SkillsButtons } from "./skillsbuttons.js";
import Logos from "./logos";

import reactLogo from "../assets/reactLogo.svg";
import angularLogo from "../assets/angularlogo.svg";
import cssLogo from "../assets/csslogo.svg";
import htmlLogo from "../assets/htmllogo.svg";
import sketchLogo from "../assets/sketchlogo.svg";
import aiLogo from "../assets/illustratorlogo.svg";
import jsLogo from "../assets/jslogo.svg";
import nodeLogo from "../assets/nodelogo.svg";
import javaLogo from "../assets/javalogo.svg";
import appengineLogo from "../assets/appenginelogo.svg";
import firebaseLogo from "../assets/firebase.svg";

const frontEndLogos = [
  reactLogo,
  angularLogo,
  cssLogo,
  htmlLogo,
  sketchLogo,
  jsLogo
];

const backEndLogos = [nodeLogo, javaLogo];
const cloudLogos = [firebaseLogo, appengineLogo];

export class SkillsPage extends Component {
  state = {
    selected: "frontend"
  };

  handleSelectedSkill = skill => {
    console.log("state: " + skill);
    this.setState({
      selected: skill
    });
    this.chooseLogo();
  };

  chooseLogo = () => {
    if (this.state.selected == "frontend") return frontEndLogos;
    if (this.state.selected == "backend") return backEndLogos;
    if (this.state.selected == "cloud") return cloudLogos;
    return [];
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#1B1C1D",
          height: "800px"
        }}
        className=""
        id="skillspage_root"
      >
        <div className=" container-fluid ">
          <br />
        </div>

        <div className="my-5 " id="title_div">
          <h1 className="title1  display-4 text-light ">Skills</h1>
        </div>
        <SkillsButtons onSelected={this.handleSelectedSkill} />
        <Logos logos={this.chooseLogo()} />
      </div>
    );
  }
}
