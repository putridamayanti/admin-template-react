import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/basic/Header";
import Aside from "./components/basic/Aside";

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header/>
              <Aside/>
          </div>
      );
  }
}

export default App;
