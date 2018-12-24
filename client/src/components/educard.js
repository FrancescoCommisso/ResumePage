import React, { Component } from "react";

export class EducCard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid ">
        <div
          style={{ paddingLeft: "200px", paddingRight: "200px" }}
          className="row"
        >
          <div
            className="col px-3"
            style={{ margin: "40px", backgroundColor: "#000000" }}
          >
            EDUCATION MOTHERFUCKER
          </div>
          <div style={{ margin: "40px" }} className="col bg-light px-3">
            DESCRIPTION MOTHERFUCKER
          </div>
        </div>
      </div>
    );
  }
}

export default EducCard;
