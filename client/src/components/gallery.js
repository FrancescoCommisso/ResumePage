import React from "react";
import AliceCarousel from "react-alice-carousel";

export class Gallery extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    return (
      <AliceCarousel>
        <div className="bg-info">
          <h2>1</h2>
        </div>
        <div className="bg-info">
          <h2>2</h2>
        </div>
        <div className="bg-info">
          <h2>3</h2>
        </div>
        <div className="bg-info">
          <h2>4</h2>
        </div>
        <div className="bg-info">
          <h2>5</h2>
        </div>
      </AliceCarousel>
    );
  }
}
