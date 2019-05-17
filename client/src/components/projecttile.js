import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ProductCard, TaggedContentCard } from "react-ui-cards";
import "./skillspage.css";

const bgt = require("../assets/boardgametimer.svg");

class ProjectTile extends Component {
  state = {};
  render() {
    return (
      <div>
        <ProductCard
          photos={[bgt]}
          productName="Board Game Timer"
          description="Allows people to create a timer that can be started or stopped from any device."
          rating={5}
          url="https://github.com/nukeop"
        />
      </div>
    );
  }
}

export default ProjectTile;
