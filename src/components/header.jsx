import React, { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src={require("../images/logo.jpg")} alt="" />
          </div>
          <div className="header">
            <div className="menu">
              <Link to={"/app"} className="menu-item">
                Home
              </Link>
              <Link to={"/coaches"} className="menu-item">
                Coaches
              </Link>
              <Link to={"/programs"} className="menu-item">
                Programs
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
