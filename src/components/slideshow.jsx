import React, { Component } from "react";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        'AD',
        'glen',
        'guinto'
      ],
      activePic : 'AD',
  }

  }

  nextPic() {
     switch (this.state.activePic) {
        case 'AD':
          this.setState({ activePic: 'glen' })
          break;
        case 'glen':
          this.setState({ activePic: 'guinto' })
          break;
        case 'guinto':
          this.setState({ activePic: 'AD' })
          break;
     }
  }
  
  lastPic() {
    switch (this.state.activePic) {
      case 'AD':
        this.setState({ activePic: 'guinto' })
        break;
      case 'glen':
        this.setState({ activePic: 'AD' })
        break;
      case 'guinto':
        this.setState({ activePic: 'glen' })
        break;
   }
  }

  componentDidMount() {
   // setInterval(() => this.nextPic(), 6000);
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
