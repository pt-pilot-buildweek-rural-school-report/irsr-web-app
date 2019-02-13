import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Nav />
      </div>
    );
  }
}

export default App;
