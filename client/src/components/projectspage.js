import React, { Component } from "react";
import { ProjectCarousel } from "./projectcarousel";

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflow: "overlay",
          backgroundColor: "#252627"
        }}
        className=" container-fluid  text-center"
        id="project_root"
      >
        <br />
        <br />
        <a id="projects-page" />
        <div className=" my-4 text-center " id="title_div" style={{}}>
          <h1 className="title1  display-4 text-light ">Projects</h1>
          <p className="subtitle-text text-light ">
            Cool things I have already built
          </p>
          <div className=" row text-center">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
