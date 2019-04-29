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
const pokerImages = [
  {
    src: require("../assets/pokerchip-images/currenthand.svg"),
    width: 3,
    height: 5
  },
  {
    src: require("../assets/pokerchip-images/createtable.svg"),
    width: 3,
    height: 5
  },
  {
    src: require("../assets/pokerchip-images/raise.svg"),
    width: 3,
    height: 5
  },
  {
    src: require("../assets/pokerchip-images/startgame.svg"),
    width: 3,
    height: 5
  }
];
const watchlistImages = [
  {
    src: require("../assets/watchlist1.png"),
    width: 1436,
    height: 2422
  },
  {
    src: require("../assets/watchlist2.png"),
    width: 1436,
    height: 2422
  },
  {
    src: require("../assets/watchlist3.png"),
    width: 1436,
    height: 2422
  }
];
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
  " Lots is a mobile tool that I designed and implemented in my sparetime. It is currently being used by Royal Building Supplies to increase productivity by providing real-time communication between management and their delivery team. Lots is an android application written in Java that uses Google’s Firebase backend services. I am currently still working with Royal Building Supplies to maintain the application and add new features when necessary.";

export class ProjectCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        className="container-fluid mx-auto text-center"
        naturalSlideWidth={2}
        naturalSlideHeight={2}
        totalSlides={3}
        cellAlign="center"
      >
        <div
          className="  text-center d-block"
          style={{
            position: "absolute",
            padding: "20px",
            width: "100%",
            zIndex: "10",
            left: "0",
            bottom: "50%"
          }}
        >
          {/* <ButtonBack className="btn d-block" style={{ float: "left" }}>
            Back
          </ButtonBack>
          <ButtonNext className="btn d-block" style={{ float: "right" }}>
            Next
          </ButtonNext> */}
        </div>
        <div className="">
          <Slider
            moveThreshold="0.1"
            className="mx-1"
            style={{ minHeight: "850px" }}
          >
            <Slide index={0}>
              <ProjectSlide
                images={lotsImages}
                desc={lotsDesc}
                sub={lotsSub}
                title={lotsTitle}
              />
            </Slide>
            <Slide index={1}>
              <div className="text-center">
                <ProjectSlide
                  images={watchlistImages}
                  desc={
                    "The Watchlist was originally a small project for me and my friend, Josh Isaac, to play around with API's. And it has now trasnformed into a full fledged web application, complete with user-authentication and management. "
                  }
                  sub={"A Tool To Orgainze My Movie Addiction"}
                  title={"The Watchlist"}
                />
              </div>
            </Slide>
            <Slide index={2}>
              <div className="text-center">
                <ProjectSlide
                  images={pokerImages}
                  desc={
                    "PokerChips is a platform independant web app that allows friends to play poker - or any chip based game - without the need for a physical poker set. \n\n This is basically just a fun way for me to hone my server side skills, while also creating something that I know I would enjoy. It is currently being built with Express, React-Redux, Socket.io and Firebase Cloud Functions."
                  }
                  sub={"A Virtual Set of Poker Chips"}
                  title={"PokerChips"}
                />
              </div>
            </Slide>
          </Slider>
        </div>
      </CarouselProvider>
    );
  }
}
