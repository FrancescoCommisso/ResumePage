import React, { Component } from "react";
import "./emailform.css";
import "./main.css";

class EmailForm extends Component {
  constructor() {
    super();

    this.state = { name: "", email: "", text: "", status: "0" }; //status:0 = unsent status:1 = sent-good  status:2 = sent-bad stats:4 = sending
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }
  notifySent(status) {
    if (status == 200) {
      this.setState({
        status: 1
      });
    } else {
      this.setState({
        status: 2
      });
    }
  }

  checkInputs() {
    if (this.state.email.length > 0) {
      if (this.state.name.length > 0) {
        if (this.state.text.length > 0) {
          console.log("inputs = true");
          return true;
        }
      }
    }
    console.log(
      "inputs = false" + this.state.email + this.state.name + this.state.text
    );
    return false;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.checkInputs()) {
      this.setState({
        status: 4
      });
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(this.state)
      };
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://learningherokustuff.herokuapp.com/mail";
      const request = new Request(proxyurl + url, options);
      const response = await fetch(request);
      const status = await response.status;
      this.notifySent(status);
    } else {
      this.setState({
        status: 2
      });
    }
  }

  showError() {}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    var status = this.state.status;
    let resultDiv;
    if (status == 1) {
      resultDiv = (
        <div
          style={{
            marginTop: "5px",
            padding: "5px",
            color: "#ffffff",
            visibility: "visible",
            backgroundColor: "#2983ff"
          }}
        >
          Thanks for your email!
        </div>
      );
    } else if (status == 2) {
      resultDiv = (
        <div
          style={{
            marginTop: "5px",
            padding: "5px",
            color: "#ffffff",
            visibility: "visible",
            backgroundColor: "#F8196C"
          }}
        >
          Please fill out every field!
        </div>
      );
    } else if (status == 4) {
      resultDiv = (
        <div
          style={{
            marginTop: "5px",
            padding: "5px",
            color: "#ffffff",
            visibility: "visible",
            backgroundColor: "#2983ff"
          }}
        >
          Sending Email: Waiting for my Free-Tier Heroku servers to wake up...
          😴😴😴
        </div>
      );
    } else {
      resultDiv = <div style={{ display: "none" }}>Email Sent</div>;
      const vis = "hidden";
    }
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
            className="form-control dark-input info "
            id="nameInput"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Name"
          />
          <input
            type="email"
            className="form-control my-1 dark-input info"
            id="emailInput"
            name="email"
            onChange={this.handleInputChange}
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <textarea
            type="text"
            rows="8"
            className="form-control always-dark"
            style={{
              background: "#4a4a4a",
              color: "#ffffff"
            }}
            id="bodyInput"
            name="text"
            onChange={this.handleInputChange}
            placeholder="Your Message"
          />

          {resultDiv}

          <div className="text-right">
            <button className="btn btn-primary my-2">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailForm;
