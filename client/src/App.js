import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SkillsPage } from "./components/skillspage";
import { HomePage } from "./components/homepage";
import Footer from "./components/footer";
import ContactPage from "./components/contactpage";
import About from "./components/aboutpage";
import ProjectsPage from "./components/projectspage";
import ProjectTile from "./components/projecttile";
import NewProjects from "./components/newprojectspage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <HomePage />
          <SkillsPage />

          <NewProjects />

          <ContactPage />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
