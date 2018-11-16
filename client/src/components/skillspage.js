import React, { Component } from "react";
import "./skillspage.css";
import { SkillsButtons } from "./skillsbuttons.js";

export class SkillsPage extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" id="skillspage_root">
        <div id="title_div">
          <h1 className="title">Full Stack Skills</h1>
        </div>
        <SkillsButtons />
      </div>
    );
  }
}
