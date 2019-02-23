import React, { Component } from "react";
import { connect } from "react-redux";

import { loginData } from "../actions/index";
import someDude from "../images/someDude.jpeg";

class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
        <h2>
          Welcome back {this.props.name}! You have {this.props.issues.length}{" "}
          issues to review
        </h2>
        <div className="profilePicture">
          <img src={someDude} alt="user" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.name,
    issues: state.issues
  };
};

export default connect(
  mapStateToProps,
  { loginData }
)(Profile);
