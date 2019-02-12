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
const pic = require("../assets/lotspic.png");
const pic1 = require("../assets/lotspic1.png");
const pic3 = require("../assets/lotspic3.png");
const pic4 = require("../assets/lotspic4.png");
const pic5 = require("../assets/lotspic5.png");
const pic6 = require("../assets/lotspic6.png");
const pic7 = require("../assets/lotspic7.png");

const lotsImages = [
  {
    src: pic7,
    thumbnail: pic7,
    thumbnailWidth: 470,
    thumbnailHeight: 940,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)"
  },
  {
    src: pic6,
    thumbnail: pic6,
    thumbnailWidth: 470,
    thumbnailHeight: 940,
    caption: "37H (gratispgraphy.com)"
  },
  {
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 470,
    thumbnailHeight: 940,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)"
  },
  {
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 470,
    thumbnailHeight: 940,
    caption: "37H (gratispgraphy.com)"
  },
  {
    src: pic3,
    thumbnail: pic3,
    thumbnailWidth: 470,
    thumbnailHeight: 940,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: pic1,
    thumbnail: pic1,
    thumbnailWidth: 470,
    thumbnailHeight: 940,
    caption: "37H (gratispgraphy.com)"
  }
  // {
  //   src: pic,
  //   thumbnail: pic,
  //   thumbnailWidth: 470,
  //   thumbnailHeight: 940,
  //   caption: "After Rain (Jeshu John - designerspics.com)"
  // }
];

export class ProjectCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        className="container-fluid  mx-auto text-center"
        naturalSlideWidth={2}
        naturalSlideHeight={2}
        totalSlides={3}
        cellAlign="center"
      >
        <div className="row d-flex text-center my-auto mx-auto">
          <Slider
            className="col align-items-center align-self-center d-inline-block"
            style={{ minHeight: "700px", maxHeight: "700px" }}
          >
            <Slide index={0}>
              <div className="text-center ">
                <ProjectSlide />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="text-center ">
                <ProjectSlide />
              </div>
            </Slide>
            <Slide index={2}>
              <div />
            </Slide>
          </Slider>
        </div>

        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }
}
