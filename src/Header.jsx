import React from "react";
import "./App.css";

const Header = props => {
  const { branding } = props;
  return (
    <div className="navi navbar navbar-expand-sm navbar-dark mb-3 bg-danger py-1">
      <div className="container">
        <a className="nav navbar-brand" href="#">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-bolt mr-1" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-question mr-1" />
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
