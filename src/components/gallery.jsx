import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
            <div className="gallery-div">
                <img src={require("../images/AD1.jpg")} alt="" className="gallery-img"/>
                <span className="image-caption">Lorem ipsum</span>
        </div>

            <div className="gallery-div">
                <img src={require("../images/guinto1.jpg")} alt="" className="gallery-img"/>
                <span className="image-caption">Lorem ipsum</span>

        </div>

            <div className="gallery-div">
                <img src={require("../images/glen1.jpg")} alt="" className="gallery-img" />
                <span className="image-caption">Lorem ipsum</span>

        </div>
      </div>
    );
  }
}

export default Gallery;
