import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import { Nav } from "./components/nav";
import { Navbar } from "./components/navbar.js";
import Backgroundimg from "./components/backgroundimg.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/homepage";
import Description from "./components/description";
import BackgroundImage from "./components/backgroundImage.js";
import DescriptionFunny from "./components/descriptionbrackets";
import TestSvg from "./components/testsvg.js";
import { SkillsPage } from "./components/skillspage";
import { HomePage1 } from "./components/homepageanim";
import Footer from "./components/footer";
import ContactPage from "./components/contactpage";
import About from "./components/aboutpage";
import ProjectsPage from "./components/projectspage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <HomePage1 />
          <SkillsPage />
          <About />
          <ProjectsPage />
          <ContactPage />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
