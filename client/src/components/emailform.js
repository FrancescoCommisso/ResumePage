import React, { Component } from "react";
import { get } from "https";
var request = require("request");

class EmailForm extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", text: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("state: " + this.state);

    fetch("https://learningherokustuff.herokuapp.com/mail", {
      method: "POST",
      body: this.state
    });

    // const url =
    //   "https://learningherokustuff.herokuapp.com/mail?name=" +
    //   name +
    //   "email=" +
    //   email +
    //   "text=" +
    //   text;
    // request(url, function(error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     console.log(body); // Print the google web page.
    //   }
    // });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <form
          onSubmit={this.handleSubmit}
          style={{ maxWidth: "500px" }}
          className="row col-sm d-inline-block form-group"
        >
          <input
            type="text"
            onChange={this.handleInputChange}
            style={{
              background: "#4A4A4A",
              borderColor: "#4A4A4A",
              color: "#FFFFFF",
              borderRadius: "0"
            }}
            className="form-control"
            id="nameInput"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Name"
          />
          <input
            type="email"
            style={{
              background: "#4A4A4A",
              borderColor: "#4A4A4A",
              color: "#FFFFFF",
              borderRadius: "0"
            }}
            className="form-control my-1"
            id="emailInput"
            name="email"
            onChange={this.handleInputChange}
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <textarea
            type="text"
            rows="8"
            style={{
              background: "#4A4A4A",
              borderColor: "#4A4A4A",
              color: "#FFFFFF",
              borderRadius: "0"
            }}
            className="form-control"
            id="bodyInput"
            name="text"
            onChange={this.handleInputChange}
            placeholder="Your Email Body"
          />
          <div className="text-right">
            <button className="btn btn-primary my-2">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailForm;
