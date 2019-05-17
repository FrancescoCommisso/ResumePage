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
      <div
        style={{
          backgroundColor: "#1D1D1D"
        }}
      >
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
                description="Create and share a virtual timer that can be controlled from any device."
                rating={5}
                url="https://boardgametimer.herokuapp.com"
              />
            </Col>
            <Col className="mx-auto">
              <ProductCard
                photos={[lots]}
                productName="Lots"
                description="A project management application built for Royal Building Supply."
                rating={5}
                url=""
              />
            </Col>
            <Col className="mx-auto">
              <ProductCard
                photos={[watch]}
                productName="The Watchlist"
                description="Allows users to build and share lists of movies they want to see."
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
