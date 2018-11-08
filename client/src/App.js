import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import Customers from "./components/Customer/customers";
import MyName from "./components/MyName";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MyName />
          <MyName />
          <MyName />
          <MyName />
          <MyName />
        </div>
      </Provider>
    );
  }
}

export default App;
