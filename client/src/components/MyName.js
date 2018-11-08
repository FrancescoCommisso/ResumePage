import React, { Component } from "react";
import "./myName.css";
export default class MyName extends Component {
  render() {
    return (
      <div className="bg-dark w-100 h-100 d-inline-block">
        <div className="col-md-5 p-lg-5 mx-auto my-5 text-left">
          <h1 className="display-6 font-weight-bold text-light">
            My Name is <br /> Francesco, <br />I build software.
          </h1>
          <p class="spaced-out faded">Front End / Back End / Cloud Solutions</p>
          <a class="btn btn-outline-light  whiteBTN" href="#">
            Contact Me
          </a>
        </div>
      </div>
    );
  }
}
