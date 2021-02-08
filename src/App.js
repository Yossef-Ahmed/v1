import React, { Component } from 'react';
import './style/App.scss';
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          Content
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default App
