import React, { Component } from "react";
import Description from "./description";

const style1 = {
  position: "relative",
  marginTop: "100px"
};

export class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={style1}>
          <Description />
        </div>
      </div>
    );
  }
}
