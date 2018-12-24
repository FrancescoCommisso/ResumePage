import React, { Component } from "react";
import SkillsCircle from "./skillscircle";
import "./skillsbuttons.css";
const frontEndIcon = require("../assets/frontendiconpink.svg");
const backEndEndIcon = require("../assets/serverpink.svg");
const cloudEndEndIcon = require("../assets/cloudpink.svg");

const style = {
  marginBottom: "50px",
  marginTop: "50px"
};

export class SkillsButtons extends Component {
  state = {
    frontend: true,
    backend: false,
    cloud: false
  };

  handleSelected = skill => {
    console.log("SkillsButtons handleSelected(" + skill + ")");
    this.setState({
      frontend: false,
      backend: false,
      cloud: false
    });
    this.setState({
      [skill]: true
    });
    this.props.onSelected(skill);
  };

  render() {
    return (
      <div
        className="container-fluid text-center"
        style={{ marginTop: "40px" }}
        id="skillsbuttons_root"
      >
        <div class="text-center row">
          <div class="col text-center  text-light ">
            <SkillsCircle
              selected={this.state.frontend}
              onSelected={this.handleSelected}
              id="frontend"
              icon={frontEndIcon}
            />
            <h3 className="button-text">Front End</h3>
          </div>
          <div class="col text-center text-light ">
            <SkillsCircle
              selected={this.state.backend}
              onSelected={this.handleSelected}
              id="backend"
              icon={backEndEndIcon}
            />
            <h3 className="button-text">Back End</h3>
          </div>
          <div class="col text-center text-light ">
            <SkillsCircle
              selected={this.state.cloud}
              id="cloud"
              onSelected={this.handleSelected}
              icon={cloudEndEndIcon}
            />
            <h3 className="button-text">Cloud</h3>
          </div>
        </div>
      </div>
    );
  }
}
