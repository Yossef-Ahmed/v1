import React, { Component } from 'react';
import './style/App.scss';
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export class App extends Component {
  state = {
    isDarkTheme: JSON.parse(localStorage.getItem('isDarkTheme')) || false
  }
  toggleDarkTheme = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isDarkTheme !== prevState.isDarkTheme) {
      // Save the theme to the localStorage
      localStorage.setItem("isDarkTheme", this.state.isDarkTheme)
    }
  }
  render() {
    return (
      <div className={`App ${this.state.isDarkTheme === true ? 'dark-mode' : 'light-mode'}`}>
        <Navbar toggleDarkTheme={this.toggleDarkTheme} />
        <div className="content">
          <Header />
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default App
