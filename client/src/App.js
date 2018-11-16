import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import { Nav } from "./components/nav";
import { Navbar } from "./components/navbar.js";
import Backgroundimg from "./components/backgroundimg.js";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { HomePage } from "./components/homepage";
import Description from "./components/description";
import BackgroundImage from "./components/backgroundImage.js";
import DescriptionFunny from "./components/descriptionfunny";
import TestSvg from "./components/testsvg.js";
import { SkillsPage } from "./components/skillspage";
class App extends Component {
  render() {
    return (
      <div id="app-root">
        <Navbar />
        <br />
        <br />
        <br />
        <HomePage />
        <SkillsPage />
      </div>
    );
  }
}

export default App;
