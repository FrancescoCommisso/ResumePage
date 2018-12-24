import React, { Component } from "react";
import "./contact.css";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "800px",
          backgroundColor: "#1D1D1D"
        }}
        className="text-center"
        id="contactpage_root"
      >
        <br />
        <br />
        <br />
        <a id="contact" />
        <div className="my-4 text-center " id="title_div">
          <h1 className="title1  display-4 text-light ">Contact Me</h1>
          <p className="subtitle-text text-light ">Lets build something cool</p>
        </div>

        <div className="container-fluid my-5">
          <form
            style={{ maxWidth: "500px" }}
            className="row col-sm d-inline-block form-group"
          >
            <input
              type="text"
              style={{
                background: "#4A4A4A",
                borderColor: "#4A4A4A",
                color: "#FFFFFF",
                borderRadius: "0"
              }}
              className="form-control"
              id="nameInput"
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
              id="exampleInputEmail1"
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
              id="exampleInputPassword1"
              placeholder="Your Email"
            />
            <div className="text-right">
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
