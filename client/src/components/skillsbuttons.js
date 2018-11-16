import React, { Component } from "react";
import SkillsCircle from "./skillscircle";
const frontEndIcon = require("../assets/frontendiconpink.svg");
const backEndEndIcon = require("../assets/serverpink.svg");
const cloudEndEndIcon = require("../assets/cloudpink.svg");

const style = {
  textAlign: "center"
};

export class SkillsButtons extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid" id="skillsbuttons_root">
        <div class="row ">
          <div class="col text-center  text-light ">
            <SkillsCircle icon={frontEndIcon} />
          </div>
          <div class="col text-center text-light ">
            <SkillsCircle icon={backEndEndIcon} />
          </div>
          <div class="col text-center text-light ">
            <SkillsCircle icon={cloudEndEndIcon} />
          </div>
        </div>
      </div>
    );
  }
}
