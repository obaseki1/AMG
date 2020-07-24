import React, { Component } from "react";
import Header from "./header";
import Profile from "./profile";

class Coaches extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className ="coach-section">
          <Profile
            prefix={"A"}
            name={"Adonis Monfort Palomino"}
            pic={"AD"}
            bio={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere cursus pulvinar. Mauris id viverra ex. Suspendisse pretium, felis sed sagittis pretium, lectus eros pellentesque ante, ut luctus tortor magna eget justo. Maecenas id ullamcorper ipsum, at luctus lectus. Vivamus ultricies faucibus libero nec sagittis. Nulla facilisi. Nulla tortor turpis, ornare in mollis et, commodo eget nunc. Nullam vestibulum dui non dapibus interdum."
            }
          />

          <Profile
            prefix={"M"}
            name={"Matthew Guinto"}
            pic={"guinto"}
            bio={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere cursus pulvinar. Mauris id viverra ex. Suspendisse pretium, felis sed sagittis pretium, lectus eros pellentesque ante, ut luctus tortor magna eget justo. Maecenas id ullamcorper ipsum, at luctus lectus. Vivamus ultricies faucibus libero nec sagittis. Nulla facilisi. Nulla tortor turpis, ornare in mollis et, commodo eget nunc. Nullam vestibulum dui non dapibus interdum."
            }
          />

          <Profile
            prefix={"G"}
            name={"Glen Yang"}
            pic={"glen"}
            bio={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere cursus pulvinar. Mauris id viverra ex. Suspendisse pretium, felis sed sagittis pretium, lectus eros pellentesque ante, ut luctus tortor magna eget justo. Maecenas id ullamcorper ipsum, at luctus lectus. Vivamus ultricies faucibus libero nec sagittis. Nulla facilisi. Nulla tortor turpis, ornare in mollis et, commodo eget nunc. Nullam vestibulum dui non dapibus interdum."
            }
          />
        </div>
      </div>
    );
  }
}
export default Coaches;
