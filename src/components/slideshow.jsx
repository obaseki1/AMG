import React, { Component } from "react";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        'slide1',
        'slide2',
        'slide3'
      ],
      activePic : 'slide1',
  }

  }

  nextPic() {
     switch (this.state.activePic) {
        case 'slide1':
          this.setState({ activePic: 'slide2' })
          break;
        case 'slide2':
          this.setState({ activePic: 'slide3' })
          break;
        case 'slide3':
          this.setState({ activePic: 'slide1' })
          break;
     }
  }
  
  lastPic() {
    switch (this.state.activePic) {
      case 'slide1':
        this.setState({ activePic: 'slide3' })
        break;
      case 'slide2':
        this.setState({ activePic: 'slide1' })
        break;
      case 'slide3':
        this.setState({ activePic: 'slide2' })
        break;
   }
  }

  componentDidMount() {
    setInterval(() => this.nextPic(), 6000);
  }
  


  render() {
    return (
      <div className="main">
       
        <img src={require(`C:/Users/noma_/Documents/Coding/React/amg/src/images/${this.state.activePic}.jpg`)} alt="" />
        <i class="fas fa-angle-left"
        onClick={()=> this.lastPic()}
        >

        </i>
        <i class="fas fa-angle-right"
        onClick={() => this.nextPic()}
        >

        </i>
      </div>
    );
  }
}

export default Slideshow;
