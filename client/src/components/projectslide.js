import React, { Component } from "react";
import Sample from "./photogallery";

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
    width: 1,
    height: 2
  },
  {
    src: pic6,
    width: 1,
    height: 2
  },
  {
    src: pic5,
    width: 1,
    height: 2
  },
  {
    src: pic4,
    width: 1,
    height: 2
  },
  {
    src: pic3,
    width: 1,
    height: 2
  },
  {
    src: pic1,
    width: 1,
    height: 2
  }
];
const images = [
  {
    src: "../assets/lotspic4.png",

    thumbnail: "../assets/lotspic4.png",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 183,
    caption: "37H (gratispgraphy.com)"
  },
  {
    src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    thumbnail:
      "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
    thumbnailWidth: 271,
    thumbnailHeight: 320,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "201H (gratisography.com)"
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    thumbnail:
      "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    thumbnail:
      "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
    thumbnailWidth: "40vw",
    thumbnailHeight: 213,
    caption: "Man on BMX (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    thumbnail:
      "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
    thumbnailWidth: 257,
    thumbnailHeight: 320,
    caption: "A photo by 贝莉儿 NG. (unsplash.com)"
  }
];

class ProjectSlide extends Component {
  state = {};
  render() {
    return (
      <div
        className="text-light mx-auto"
        style={{
          maxWidth: "900px",
          padding: "20px",
          overflow: "overlay",
          backgroundColor: "#121213"
        }}
      >
        <div className="text-left">
          <p style={{ fontSize: "2em" }}>Lots</p>
          <p style={{ fontSize: "1.5em" }} className="subtitle-text ">
            Custom Resource Management Application Built For Royal Building
            Supplies{" "}
          </p>

          <p style={{ fontSize: "1em" }} className="text-light ">
            Lots is a mobile tool that I designed and implemented in my spare
            time. It is currently being used by Royal Building Supplies to
            increase productivity by providing real-time communication between
            management and the delivery team.
            <br />
            <br />
            Lots is an android application written in Java and uses Google’s
            Firebase backend services. I am currently still working with Royal
            Building Supplies to maintain the application and add new features
            when necessary.
          </p>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col">
            <Sample photoset={lotsImages} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSlide;
