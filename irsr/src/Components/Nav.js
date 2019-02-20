import React, { Component } from "react";
import "../css/index.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
  }
  handleClick = event => {
    this.setState({
      condition: !this.state.condition
    });
  };
  render() {
    return (
      <div className="navBarWrapper">
        <button onClick={this.handleClick} className="barsButton">
          <i className="fas fa-bars" />
        </button>
        <nav className={this.state.condition ? "navBar toggled" : "navBar"}>
          <h2>International Rual School Report</h2>
          <div>
            <div className="navLinkWrapper">
              <i className="far fa-user menuIcon" />
              <Link to={"/home/profile"}>Profile</Link>
            </div>
            <div className="navLinkWrapper">
              <i className="fas fa-th menuIcon" />
              <Link to={"/home"}>Issues</Link>
            </div>
            <div className="navLinkWrapper">
              <i className="fas fa-pen-square menuIcon" />
              <Link to={"/home/issueform"}>New Issue</Link>
            </div>
            <div className="navLinkWrapper">
              <i className="fas fa-sign-in-alt menuIcon" />
              <a href="#">Log Out</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
