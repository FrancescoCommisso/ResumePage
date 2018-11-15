import React, { Component } from "react";
import Backgroundimg from "./backgroundimg";
import Description from "./description";
import { Navbar } from "./navbar";
import DescriptionFunny from "./descriptionfunny";

const style1 = {
  position: "relative"
};

export class HomePage extends Component {
  state = {};
  render() {
    return (
      <div style={style1}>
        <Navbar />
        <Description />
      </div>
    );
  }
}
