import React, { Component } from 'react'

export class Navbar extends Component {
    toggleMenuLinks = () => {
        document.querySelector('.links-container').classList.toggle('active');
    }
    render() {
        return (
            <nav className="navbar">
                <div className="hamburger-menu" onClick={this.toggleMenuLinks}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="links-container">
                    <div className="links-container__close-btn" onClick={this.toggleMenuLinks}>
                        <i className="fas fa-times"></i>
                    </div>
                    <ul className="links-list">
                        <li className="links-list__link">
                            <a href="#">About</a>
                        </li>
                        <li className="links-list__link">
                            <a href="#">My Skills</a>
                        </li>
                        <li className="links-list__link">
                            <a href="#">My Resume</a>
                        </li>
                        <li className="links-list__link">
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
