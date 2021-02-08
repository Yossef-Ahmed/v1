import React, { Component } from 'react'

export class Navbar extends Component {
    toggleMenuLinks = () => {
        document.querySelector('.mobile-links').classList.toggle('active');
    }
    render() {
        return (
            <nav className="navbar">
                <h2 className="brand-name">YA</h2>
                <div className="navbar__right">
                    <div className="hamburger-menu" onClick={this.toggleMenuLinks}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="mobile-links">
                        <div className="mobile-links__close-btn" onClick={this.toggleMenuLinks}>
                            <i className="fas fa-times"></i>
                        </div>
                        <ul className="links-list links-list--beside-btn">
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
                </div>
            </nav>
        )
    }
}

export default Navbar
