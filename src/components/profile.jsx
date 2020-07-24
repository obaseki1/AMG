import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <div className="prefix">{this.props.prefix}</div>
        <div className="coach-profile">
          <div className="coach-img">
             <img
            src={require(`C:/Users/noma_/Documents/Coding/React/amg/src/images/${this.props.pic}.jpg`)}
            alt="profile pic"
            />
           
          </div>
        
          <div className="coach-name">{this.props.name}</div>
          <div className="coach-bio">{this.props.bio}</div>
        </div>
      </div>
    );
  }
}
export default Profile;
