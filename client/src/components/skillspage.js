import React, { Component } from "react";
import "./skillspage.css";
import { SkillsButtons } from "./skillsbuttons.js";
import Logos from "./logos";
import { Stats } from "./stats.js";

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
import herokuLogo from "../assets/heroku.png";

const frontEndLogos = [
  { logo: htmlLogo, id: "2" },
  { logo: cssLogo, id: "1" },
  { logo: jsLogo, id: "3" },
  { logo: reactLogo, id: "4" },
  { logo: sketchLogo, id: "6" },
  { logo: aiLogo, id: "7" }
];
const backEndLogos = [{ logo: nodeLogo, id: "8" }, { logo: javaLogo, id: "9" }];
const cloudLogos = [
  { logo: firebaseLogo, id: "10" },
  { logo: appengineLogo, id: "11" },
  { logo: herokuLogo, id: "12" }
];

export class SkillsPage extends Component {
  state = {
    selected: "frontend",
    selectedSkill: "1"
  };

  handleSelectedStack = stack => {
    console.log("state: " + stack);
    this.setState({
      selected: stack
    });
    this.chooseLogo();
  };

  handleSelectedSkill = skill => {
    console.log("skill passed from skillbutton " + skill);
    this.setState({
      selectedSkill: skill
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
          minHeight: "800px",
          backgroundColor: "#252627",
          padding: "25px"
        }}
        id="skillspage_root"
      >
        <br />
        <br />
        <br />

        <a id="skills" />
        <div className=" container-fluid " />

        <div className=" text-center " id="title_div">
          <h1 className="title1  display-4 text-light ">Skills</h1>
          <p className="subtitle-text text-light ">
            What I use to make cool things
          </p>{" "}
        </div>
        <SkillsButtons onSelected={this.handleSelectedStack} />
        <Logos
          onSelected={this.handleSelectedSkill}
          logos={this.chooseLogo()}
        />
        <Stats skill={this.state.selectedSkill} />
      </div>
    );
  }
}
