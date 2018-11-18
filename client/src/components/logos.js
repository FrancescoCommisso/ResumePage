import React, { Component } from "react";
import { Logo } from "./logo.js";

export class Logos extends Component {
  constructor(props) {
    super(props);
    // this.makeLogos = this.makeLogos.bind(this);
  }

  // state = {
  //   logos: this.props.logos
  // };

  makeLogos = () => {
    const logos = this.state.map(logo => <Logo logo={logo} />);
  };

  render() {
    return (
      <div className="container-fluid text-center w-75" id="logos_root">
        <div className="row align-baseline">
          {this.props.logos.map(logo => (
            <Logo logo={logo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Logos;
