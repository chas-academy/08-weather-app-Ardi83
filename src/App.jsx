import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import Weather from "./Weather";

import { Provider } from "./Context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Weather App" />
            <Info />
            <Weather />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
