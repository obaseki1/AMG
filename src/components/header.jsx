import React, { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="title">AMG</div>
          <div className="header">
            <div className="menu">
             
              <Link to={"/app"} className="menu-item">Home</Link>
                <Link to={"/coaches"} className="menu-item">Coaches</Link>
              <a href="" className="menu-item">
                Programs
              </a>
            </div>
          </div>
          <a href="" className="login menu">
            Login
          </a>
        </header>
      </div>
    );
  }
}
export default Header;
