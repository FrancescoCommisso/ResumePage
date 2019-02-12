import React, { Component } from "react";

export class ProjectImage extends Component {
  state = {};
  render() {
    return (
      <img style={{ width: "200px", heigh: "400px" }} src={this.props.src} />
    );
  }
}

export default ProjectImage;
