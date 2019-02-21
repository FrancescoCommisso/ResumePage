import React, { Component } from "react";
import "./contact.css";
import EmailForm from "./emailform";

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

        <EmailForm />
      </div>
    );
  }
}

export default ContactPage;
