import React, { Component } from "react";
import "./description.css";
import "./navbar.css";
import Scrollchor from "react-scrollchor";
import Easing from "jquery-easing";

const navStyle = {
  backgroundColor: "#000000",
  borderBottom: "1px solid #2983ff"
};

const hidden = {
  top: "-1000000"
};
const navLinkStyle = {
  color: "#0983ff",
  hover: "#f9186c"
};

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container w-100">
        <nav
          id="navbar"
          className="navbar fixed-top navbar-expand-lg navbar-dark"
          style={navStyle}
        >
          <a className="blue-red font-weight-bold" href="#">
            F
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li>
                <Scrollchor
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  to="#home-page"
                  animate={{
                    offset: 0,
                    duration: 500,
                    easing: Easing.easeInBounce
                  }}
                  afterAnimate={() => {}}
                  className="nav-link"
                >
                  Home
                </Scrollchor>
              </li>
              <li>
                <Scrollchor
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  animate={{
                    offset: 0,
                    duration: 500,
                    easing: Easing.easeInOutSine
                  }}
                  to="skills"
                  className="nav-link"
                >
                  Skills
                </Scrollchor>
              </li>
              <li>
                <Scrollchor
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  animate={{
                    offset: 0,
                    duration: 500,
                    easing: Easing.easeInOutSine
                  }}
                  to="#contact"
                  className="nav-link"
                >
                  Contact
                </Scrollchor>
              </li>
              {/* <li>
                <Scrollchor
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  animate={{
                    offset: 0,
                    duration: 500,
                    easing: Easing.easeInOutSine
                  }}
                  to="#about-page"
                  className="nav-link"
                >
                  About
                </Scrollchor>
              </li> */}
              <li>
                <Scrollchor
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  animate={{
                    offset: 0,
                    duration: 500,
                    easing: Easing.easeInOutSine
                  }}
                  to="#projects-page"
                  className="nav-link"
                >
                  Projects
                </Scrollchor>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
