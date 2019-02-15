import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import IssueForm from './Components/IssueForm'

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
       <Nav />
       <IssueForm />
      </div>
    );
  }
}

export default App;
