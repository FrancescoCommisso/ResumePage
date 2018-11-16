import React, { Component } from "react";
import SkillsCircle from "./skillscircle";
import "./skillsbuttons.css";
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
            <h3 className="button-text">
              Beautiful, intuitive, and responsive front ends that make your
              products stand out.{" "}
            </h3>
          </div>
          <div class="col text-center text-light ">
            <SkillsCircle icon={backEndEndIcon} />
            <h3 className="button-text">
              Fast and reliable beckends tailored to fit your products
              requirements.{" "}
            </h3>
          </div>
          <div class="col text-center text-light ">
            <SkillsCircle icon={cloudEndEndIcon} />
            <h3 className="button-text">
              Experience in development with the most popular cloud services.{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
