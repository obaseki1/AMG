import React, { Component } from 'react';


import Slideshow from './slideshow';
import Gallery from './gallery';
import Header from './header';

import '../styles.css';
class App extends Component{


    render() {
        return (
            <div className="app">
              
                <Header />

                <Slideshow />

                <Gallery />
            </div>
        );
    }
}

export default App;