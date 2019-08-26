import React, { Component } from "react";
import { connect } from "react-redux";
import MyNewComponent from "./MyNewCompnent";
import User from "./User";

class App extends Component {

  render() {
    return (
        <div>
            <MyNewComponent />
            <User/>
        </div>
    )  
}
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null
)(App);
