import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { ProductCard, TaggedContentCard } from "react-ui-cards";
import "./skillspage.css";
const bgt = require("../assets/boardgametimer.svg");
const lots = require("../assets/lots.svg");
const watch = require("../assets/watchlist.svg");
class NewProjects extends Component {
  state = {};
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="text-light text-center my-3">
          <h1 className="title1 display-4 ">Projects</h1>
          <p>Cool Things I Have Already Made</p>
        </div>
        <div className="container text-light">
          <Row>
            <Col className="mx-auto">
              <ProductCard
                photos={[bgt]}
                productName="Cloud Timer"
                description="Allows people to create a timer that can be started or stopped from any device."
                rating={5}
                url="https://boardgametimer.herokuapp.com"
              />
            </Col>
            <Col className="mx-auto">
              <ProductCard
                photos={[lots]}
                productName="Lots"
                description="An Android project management application I built for Royal Building Supply."
                rating={5}
                url="https://github.com/nukeop"
              />
            </Col>
            <Col className="mx-auto">
              <ProductCard
                photos={[watch]}
                productName="The Watchlist"
                description="Allows people to build and share lists of movies they want to see in the future."
                rating={5}
                url="https://the-watchlist.herokuapp.com/"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <br />
              <br />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default NewProjects;