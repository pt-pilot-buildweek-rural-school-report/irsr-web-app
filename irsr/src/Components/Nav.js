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
    console.log('hi')
    this.setState({
      condition: !this.state.condition
    });
   
  };
  render() {
    return (
      <div className="navBarWrapper">
        <button onClick={this.handleClick} className={this.state.condition ? "BarsButton hidden" : "BarsButton"}>
          <i className="fas fa-bars" />
        </button>
        <nav className={this.state.condition ? "navBar toggled" : "navBar"}>
          <button className = 'menuButton' onClick={this.handleClick}><i className="far fa-times-circle"></i></button>  
          <h2>International Rual School Report</h2>
          <div>
            <div className="navLinkWrapper">
              <i className="far fa-user menuIcon" />
              <Link to={"/home"}>Profile</Link>
            </div>
            <div className="navLinkWrapper">
              <i className="fas fa-th menuIcon" />
              <Link to={"/home/issues"}>Issues</Link>
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
