import React, { Component } from "react";
import Description from "./description";
import DescriptionBrackets from "./descriptionbrackets";

const style1 = {
  position: "relative",
  marginTop: "100px"
};

export class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="bg-info">
        <div style={style1}>
          <Description />
        </div>
      </div>
    );
  }
}
