import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/index.css';
import Nav from './Components/Nav'
import IssueForm from './Components/IssueForm'
import Login from './Components/Login'
import Profile from './Components/Profile'


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props =><Login {...props}/>}/>
        <Route path="/home" component={Nav} />
        <Route exact path = "/home" component = {Profile} />
        <Route exact path="/home/issueform" component={IssueForm} />

      </div>
    );
  }
}

export default App;
