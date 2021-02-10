import React, { Component } from 'react'

export class Navbar extends Component {
    toggleMenuLinks = () => {
        document.querySelector('.hamburger-menu').classList.toggle('active');
    }
    render() {
        return (
            <nav className="navbar container">
                <div className="hamburger-icon" onClick={this.toggleMenuLinks}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="hamburger-menu">
                    <div className="hamburger-menu__close-btn" onClick={this.toggleMenuLinks}>
                        <i className="fas fa-times"></i>
                    </div>
                    <ul className="hamburger-menu__links-list">
                        <li className="hamburger-menu__link">
                            <a href="#">About</a>
                        </li>
                        <li className="hamburger-menu__link">
                            <a href="#">My Skills</a>
                        </li>
                        <li className="hamburger-menu__link">
                            <a href="#">My Resume</a>
                        </li>
                        <li className="hamburger-menu__link">
                            <a href="#">Featured Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="switch-wrapper">
                    <i className="fas fa-sun switch__icon"></i>
                    <div className="toggle-wrapper" onClick={this.props.toggleDarkTheme}>
                        <label id="toggle"></label>
                    </div>
                    <i className="fas fa-moon switch__icon"></i>
                </div>
            </nav>
        )
    }
}

export default Navbar