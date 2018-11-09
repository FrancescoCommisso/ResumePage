import React, { Component } from "react";
import Backgroundimg from "./backgroundimg";
import Description from "./description";

const style1 = {
  position: "relative"
};

export class HomePage extends Component {
  state = {};
  render() {
    return (
      <div style={style1}>
        <Backgroundimg />
        <Description />
      </div>
    );
  }
}
