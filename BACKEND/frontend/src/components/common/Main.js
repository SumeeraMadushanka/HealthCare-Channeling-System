import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="main-header">HealthCare Channel</h1>
        <div className="home-container">
          <Home />
          <Footer/>
        </div>
      </div>
    );
  }
}
