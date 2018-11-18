import React, { Component } from "react";
import "./description.css";
import "./navbar.css";
const navStyle = {
  backgroundColor: "#000000",
  borderBottom: "1px solid #2983ff"
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
