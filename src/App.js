import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <AppNavbar />
        <h1>Souradip</h1>
      </div>
      </Router>
    );
  }
}

export default App;
