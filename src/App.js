import React, { Component } from 'react';
import './style/App.scss';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";

export class App extends Component {
  state = {
    isDarkTheme: JSON.parse(localStorage.getItem('isDarkTheme')) || false
  }
  toggleDarkTheme = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.isDarkThemeChanged(this.state.isDarkTheme, prevState.isDarkTheme)) {
      this.saveDarkThemeToLocalStorage(this.state.isDarkTheme)
    }
  }
  isDarkThemeChanged = (currentDarkTheme, prevDarkTheme) => {
    return currentDarkTheme !== prevDarkTheme
  }
  saveDarkThemeToLocalStorage = (val) => {
    localStorage.setItem("isDarkTheme", val)
  }
  render() {
    return (
      <div className={`App ${this.state.isDarkTheme === true ? 'dark-mode' : 'light-mode'}`}>
        <Navbar toggleDarkTheme={this.toggleDarkTheme} />
        <div className="content">
          <Header />
          <Skills />
          <FeaturedProjects />
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default App
