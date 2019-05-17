import React, { Component } from "react";
import { ProjectCarousel } from "./projectcarousel";
import { ProductCard, TaggedContentCard } from "react-ui-cards";

const bgt = require("../assets/boardgametimer.svg");

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div
        className="py-4"
        style={{
          backgroundColor: "#252627",
          height: "auto",
          maxHeight: "1050px"
        }}
        className=" container  "
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

          <div className="row">
            <div className="col">
              <ProductCard
                photos={[bgt]}
                productName="Board Game Timer"
                description="Allows people to create a timer that can be started or stopped from any device."
                rating={5}
                url="https://github.com/nukeop"
              />
            </div>
            <div className="col">
              <ProductCard
                photos={[bgt]}
                productName="Lots"
                description="Allows people to create a timer that can be started or stopped from any device."
                rating={5}
                url="https://github.com/nukeop"
              />
            </div>
            <div className="col">
              <ProductCard
                photos={[bgt]}
                productName="The WatchList"
                description="Allows people to create a timer that can be started or stopped from any device."
                rating={5}
                url="https://github.com/nukeop"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
