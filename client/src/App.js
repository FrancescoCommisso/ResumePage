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
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <div className="height: 100% !important block">
      //     <Nav />
      //     {/* <Background /> */}
      //   </div>
      // </Provider>

      // <BrowserRouter>
      //   <div className="height: 100% !important block">
      //     <Background />
      //   </div>
      // </BrowserRouter>

      <div id="app-root">
        <Navbar />
        <Backgroundimg />
      </div>
    );
  }
}

export default App;
