import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { EducCard } from "./educard";

export class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        className="bg-dark"
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div>
              <EducCard />
            </div>
          </Slide>
          <Slide index={1}>
            <div>
              <EducCard />
            </div>
          </Slide>
          <Slide index={2}>
            <div>
              <EducCard />
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
