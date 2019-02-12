import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProjectSlide from "./projectslide";

const lotsImages = [
  {
    src: require("../assets/lotspic7.png"),
    width: 1,
    height: 2
  },
  {
    src: require("../assets/lotspic6.png"),
    width: 1,
    height: 2
  },
  {
    src: require("../assets/lotspic5.png"),
    width: 1,
    height: 2
  },
  {
    src: require("../assets/lotspic4.png"),
    width: 1,
    height: 2
  },
  {
    src: require("../assets/lotspic3.png"),
    width: 1,
    height: 2
  },
  {
    src: require("../assets/lotspic1.png"),
    width: 1,
    height: 2
  }
];

const lotsTitle = "Lots";
const lotsSub =
  "Custom Resource Management Application Built For Royal Building Supplies";
const lotsDesc =
  " Lots is a mobile tool that I designed and implemented in my sparetime. It is currently being used by Royal Building Supplies toincrease productivity by providing real-time communication between management and the delivery team. Lots is an android application written in Java and uses Google’s Firebase backend services. I am currently still working with Royal Building Supplies to maintain the application and add new features when necessary.";

export class ProjectCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        className="container-fluid  mx-auto text-center"
        naturalSlideWidth={2}
        naturalSlideHeight={2}
        totalSlides={2}
        cellAlign="center"
      >
        <div className="row d-flex text-center my-auto mx-auto">
          <Slider
            className="col align-items-center align-self-center d-inline-block"
            style={{ minHeight: "700px", maxHeight: "700px" }}
          >
            <Slide index={0}>
              <div className="text-center  " style={{ margin: "20px" }}>
                <ProjectSlide
                  images={lotsImages}
                  desc={lotsDesc}
                  sub={lotsSub}
                  title={lotsTitle}
                />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="text-center  " style={{ margin: "20px" }}>
                <ProjectSlide
                  images={lotsImages}
                  desc={
                    "A web app that people can use if they want to play poker, but dont have a set of poker chips. \n\n This is both a tool that I will use, as well as a fun way to hone my server side skills. It is currently being built with Express, React-Redux, Socket.io and Firebase Cloud Functions."
                  }
                  sub={"A virtual Set of Poker Chips"}
                  title={"Poker Chips"}
                />
              </div>
            </Slide>
          </Slider>
        </div>

        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }
}
