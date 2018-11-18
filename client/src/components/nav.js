import React, { Component } from "react";
import Backgroundimg from "./backgroundimg.js";
import Description from "./description";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

export class Nav extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <div className="menu">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/marketing">
            Marketing
          </NavLink>
        </div>
        <div className="content">
          <Route exact path="/" component={Backgroundimg} />
          <Route exact path="/marketing" component={Description} />
        </div>
      </div>
    );
  }
}

// class Nav extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="bg-dark">
//         <h1>My Div</h1>
//       </div>
//     );
//   }
// }
