import React, { Component } from "react";
import "./description.css";
export default class DescriptionFunny extends Component {
  state = {
    whatIdo: "make software.",
    whatIdodesc: "Front End / Back End / Cloud Solutions",
    whatIReallydo: "eat ass.",
    whatIReallydodesc: "Tongue / in / Butthole",
    buttonText: "Whatchu really do tho?",
    nasty: false
  };

  render() {
    return (
      <div className=" container-fluid p-lg-5  mx-auto my-5 text-left">
        <h1 className=" display-6 font-weight-bold text-light">
          My Name is <br /> Francesco, <br />I {this.state.whatIdo}
        </h1>
        <p class="spaced-out faded">{this.state.whatIdodesc}</p>
        <button
          class="btn btn-outline-light  whiteBTN"
          onClick={() => {
            if (!this.state.nasty) {
              this.setState({
                whatIdo: "eat ass.",
                whatIdodesc: " Put My  / Tongue in / Your Butthole",
                buttonText: "You nasty.",
                nasty: true
              });
            } else {
              this.setState({
                whatIdo: "make software.",
                whatIdodesc: "Front End / Back End / Cloud Solutions",
                buttonText: "Whatchu really do tho?",
                nasty: false
              });
            }
          }}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}