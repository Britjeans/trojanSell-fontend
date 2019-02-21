import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main'
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Main />
      </div>
    );
  }
}

export default App;
