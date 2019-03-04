import React, { Component } from "react";
import "./footer.css";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

class NewFooter extends Component {
  state = {};
  render() {
    return (
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default NewFooter;
