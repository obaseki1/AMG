import React, { Component } from "react";

import Slideshow from "./slideshow";
import Gallery from "./gallery";
import Header from "./header";
import Social from "./social";

import "../styles.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Slideshow />

        <Gallery />

        <Social />
      </div>
    );
  }
}

export default App;