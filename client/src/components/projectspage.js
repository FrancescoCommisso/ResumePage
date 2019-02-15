import React, { Component } from "react";
import { ProjectCarousel } from "./projectcarousel";

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#252627",
          minWidth: "500px"
        }}
        className=" container-fluid mx-auto text-center"
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
          <div className="row ">
            <ProjectCarousel className="col" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
