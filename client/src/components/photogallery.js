import React, { Component } from "react";
import Gallery from "react-photo-gallery";

export class Sample extends React.Component {
  render() {
    return (
      <Gallery
        columns={this.props.photoset.length}
        photos={this.props.photoset}
      />
    );
  }
}

const PHOTO_SET = [
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    width: 1,
    height: 1
  }
];

export default Sample;
