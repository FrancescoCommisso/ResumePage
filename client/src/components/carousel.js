import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AboutCards } from "./educard";

const aboutMeIcon = require("../assets/personPink.svg");
const educationIcon = require("../assets/educationPink.svg");
const locationIcon = require("../assets/locationPink.svg");

export class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        className=""
        naturalSlideWidth={100}
        naturalSlideHeight={150}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div>
              <AboutCards
                image={aboutMeIcon}
                aboutCategory="Who am I"
                bullet1="Fast Learner"
                bullet2="Team Player"
                bullet3="Problem Solver"
                description="test"
              />
            </div>
          </Slide>
          <Slide index={1}>
            <div>
              <AboutCards
                image={educationIcon}
                aboutCategory="Education"
                bullet1="Ryerson University"
                bullet2="4th Year Computer Science"
                bullet3="Concentration in Software Engineering"
                description="test"
              />
            </div>
          </Slide>
          <Slide index={2}>
            <div>
              <AboutCards
                image={locationIcon}
                aboutCategory="Location"
                bullet1="Vaughan, Ontario"
                bullet2="Can work remotely or in-office"
                bullet3="Concentration in Software Engineering"
                description="test"
              />
            </div>
          </Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }
}
