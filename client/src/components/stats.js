import React, { Component } from "react";
import Stardiv from "./stardiv";
import skillsObject from "../assets/skills.json";

export class Stats extends Component {
  constructor(props) {
    super(props);
  }

  state = { skill: "1" };

  componentWillReceiveProps(nextProps) {
    if (nextProps.skill !== this.props.skill) {
      this.setState({ skill: nextProps.skill });
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#121213",
          maxWidth: "920px",
          padding: "25px"
        }}
        className="my-5 mx-auto"
      >
        <div id="stats-title-div" className="text-left">
          <h4 style={{ color: "white" }} className="display-4">
            {skillsObject[this.state.skill].id}
          </h4>
          <Stardiv stars={skillsObject[this.state.skill].experience} />
        </div>

        <div style={{}} id="stats-desc-div">
          <p style={{ color: "white" }} className="lead text-light py-2 my-2">
            {skillsObject[this.state.skill].description}
          </p>
        </div>
      </div>
    );
  }
}
