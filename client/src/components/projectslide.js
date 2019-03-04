import React, { Component } from "react";
import Sample from "./photogallery";

class ProjectSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      title: this.props.title,
      sub: this.props.sub,
      desc: this.props.desc
    };
  }
  render() {
    return (
      <div className="" style={{ padding: "10px" }}>
        <div
          className="text-light mx-auto"
          style={{
            maxWidth: "850px",
            padding: "30px",
            backgroundColor: "#121213"
          }}
        >
          <div className="text-left">
            <p style={{ fontSize: "2em" }}>{this.state.title}</p>
            <p style={{ fontSize: "1.5em" }} className="subtitle-text ">
              {this.state.sub}
            </p>

            <p style={{ fontSize: "1em" }} className="text-light ">
              {this.state.desc}
            </p>
          </div>
          <div style={{ marginTop: "20px" }} className="row">
            <div className="col">
              <Sample photoset={this.state.images} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSlide;
