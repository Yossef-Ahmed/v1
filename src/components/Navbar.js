import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h2 className="brand-name">YA</h2>
                <div className="navbar__right">
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
                    <div className="switch-wrapper">
                        <i className="fas fa-sun"></i>
                        <div className="toggle-wrapper">
                            <input id="switch" type="checkbox"/>
                            <label for="switch" id="toggle"></label>
                        </div>
                        <i className="fas fa-moon"></i>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
