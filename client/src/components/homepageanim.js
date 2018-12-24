import React, { Component } from "react";
import Description from "./description";
import "./homepage1.css";
import DescriptionBrackets from "./descriptionbrackets";

const style1 = {
  position: "relative"
};

export class HomePage1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <a id="home-page" />

        <div style={{ height: "800px" }} className="background">
          <div className="front">
            <br />
            <br />
            <br />
            <DescriptionBrackets />
          </div>
          <ul id="scene" data-friction-x="0.03" data-friction-y="0.05">
            <li class="layer" id="specks" data-depth="0.1" />
            <li class="layer" id="layer-1" data-depth="0.15">
              <div class="img" id="img-1" />
            </li>
            <li class="layer" id="layer-2" data-depth="0.25">
              <div class="img" id="img-2" />
            </li>
            <li class="layer" id="layer-3" data-depth="0.45">
              <div class="img" id="img-3" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
