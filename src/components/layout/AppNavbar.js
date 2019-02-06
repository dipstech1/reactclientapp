import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
          <div className="container" />
          <Link to="/" className="navbar-Brand">
            Client panel
          </Link>

           <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
                <Link to="/" className="nav-link">
                    Dashboard
                </Link>
            </ul>
        </div>
        </nav>
      </div>
    );
  }
}
