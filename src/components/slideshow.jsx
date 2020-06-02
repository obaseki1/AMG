import React, { Component } from "react";

class Slideshow extends Component {
  render() {
    return (
      <div className="main">
       
        <img src={require("../images/AD.jpg")} alt="" />
        <i class="fas fa-angle-left"></i>  <i class="fas fa-angle-right"></i>
      </div>
    );
  }
}

export default Slideshow;
