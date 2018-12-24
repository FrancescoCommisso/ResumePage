import React, { Component } from "react";
import { Carousel } from "./carousel";

class About extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#1D1D1D"
        }}
        className="text-center"
        id="about_root"
      >
        <br />
        <br />
        <br />
        <a id="about-page" />
        <div className="my-4 text-center " id="title_div">
          <h1 className="title1  display-4 text-light ">About</h1>
          <p className="subtitle-text text-light ">
            I enjoy building cool things
          </p>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default About;
