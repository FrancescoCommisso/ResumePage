import React, { Component } from "react";
import { LogoButton } from "./logobutton.js";

export class Logos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid text-center" id="logos_root">
        <div className="row align-baseline">
          {this.props.logos.map(logo => (
            <LogoButton
              icon={logo.logo}
              onSelected={this.props.onSelected}
              skillID={logo.id}
              key={logo.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Logos;
