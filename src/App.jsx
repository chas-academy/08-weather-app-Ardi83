import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import Weather from "./Weather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Weather App" />
          <Info />
          <Weather />
        </div>
      </Router>
    );
  }
}

export default App;
