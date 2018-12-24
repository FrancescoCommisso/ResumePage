import React, { Component } from "react";

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "800px",
          backgroundColor: "#252627"
        }}
        className="text-center"
        id="project_root"
      >
        <br />
        <br />
        <br />
        <a id="projects-page" />
        <div className="my-4 text-center " id="title_div">
          <h1 className="title1  display-4 text-light ">Projects</h1>
          <p className="subtitle-text text-light ">
            Cool things I have already built
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
