import React, { Component } from "react";
import { LogoButton } from "./logobutton.js";

const styles = {
  transition: "all 0.1s ease-in"
};

export class Logos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {
    console.log("did mount");
    this.setState({
      opacity: 1
    });
  }

  onHide = () => {
    if (this.state.opacity === 0) {
      this.setState({
        opacity: 1
      });
    } else {
      this.setState({
        opacity: 0
      });
    }
  };

  render() {
    return (
      <div
        style={{ ...styles, opacity: this.state.opacity }}
        className="container-fluid  my-5  w-75  text-center"
        id="logos_root"
      >
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
