import React, { Component } from "react";
import "./emailform.css";

class EmailForm extends Component {
  constructor() {
    super();

    this.state = { name: "", email: "", text: "", status: "0" }; //status:0 = unsent status:1 = sent-good  status:2 = sent-bad
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }
  notifySent(status) {
    if (status == 200) {
      this.state.status = 1;
    } else {
      this.state.status = 2;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.status == 200) {
    }
  }

  checkInputs() {
    if (this.state.email.toString.length > 0) {
      if (this.state.name.toString.length > 0) {
        if (this.state.text.toString.length > 0) {
          console.log("inputs = true");
          return true;
        }
      }
    }
    console.log("inputs = false");
    return false;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.checkInputs) {
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
      this.setState({ status: 2 });
    }
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
    var status = this.state.status;
    let resultDiv;
    if (status == 1) {
      resultDiv = (
        <div style={{ visibility: "visible", backgroundColor: "#2983ff" }}>
          Email Sent
        </div>
      );
    } else if (status == 2) {
      resultDiv = (
        <div style={{ visibility: "visible", backgroundColor: "#f9186c" }}>
          Email Not Sent
        </div>
      );
    } else {
      resultDiv = <div style={{ visibility: "hidden" }}>Email Sent</div>;
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
            className="form-control dark-input"
            id="nameInput"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Name"
          />
          <input
            type="email"
            className="form-control my-1 dark-input "
            id="emailInput"
            name="email"
            onChange={this.handleInputChange}
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <textarea
            type="text"
            rows="8"
            className="form-control dark-input"
            id="bodyInput"
            name="text"
            onChange={this.handleInputChange}
            placeholder="Your Email"
          />

          <div className="text-right">
            {resultDiv}

            <button className="btn btn-primary my-2">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailForm;
