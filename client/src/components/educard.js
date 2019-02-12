import React, { Component } from "react";
import { SkillsCircle } from "./skillscircle";

export class AboutCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      aboutCategory: this.props.aboutCategory,
      bullet1: this.props.bullet1,
      bullet2: this.props.bullet2,
      bullet3: this.props.bullet3,
      description: this.props.description
    };
  }

  render() {
    return (
      <div className="container-fluid ">
        <div
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
          className="row"
        >
          <div
            className="col mx-auto"
            style={{
              margin: "10px",
              height: "500px",
              maxWidth: "900px",
              backgroundColor: "#121213",
              paddingTop: "30px"
            }}
          >
            <SkillsCircle size="120px" icon={this.state.image} />
            <h1
              style={{
                /* Who Am I: */
                fontFamily: "HelveticaNeue-Thin",
                fontSize: "40px",
                marginTop: "30px",
                marginBottom: "30px",
                letterSpacing: " 1.06px"
              }}
              className="h3 text-light "
            >
              {this.state.aboutCategory}
            </h1>

            <div
              style={{
                /* Who Am I: */
                fontFamily: "HelveticaNeue-Thin",
                lineHeight: "100px",
                letterSpacing: " 1.06px"
              }}
              className="text-light"
            >
              <h5 className="p my-4">{this.state.bullet1}</h5>
              <h5 className="my-4">{this.state.bullet2}</h5>
              <h5 className="my-4">{this.state.bullet3}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCards;
