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
             
                

                    <img src={require(`C:/Users/noma_/Documents/Coding/React/amg/src/${this.props.pic}.jpg`)} alt="profile pic" className="coach-img" />
                <div className="coach-name">{this.props.name}</div>
                <div>{this.props.bio}</div>
        </div>
      </div>
    );
  }
}
export default Profile;
