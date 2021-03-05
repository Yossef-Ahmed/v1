import React, { Component } from 'react'

export class Navbar extends Component {
    toggleHamburgerMenu = () => {
        document.querySelector('.hamburger-menu').classList.toggle('active');
    }
    render() {
        return (
            <nav className="navbar container">
                <div className="switch-wrapper">
                    <i className="fas fa-sun"></i>
                    <div className="toggle-wrapper" onClick={this.props.toggleDarkTheme}>
                        <label className="toggle-btn"></label>
                    </div>
                    <i className="fas fa-moon"></i>
                </div>
            </nav>
        )
    }
}

export default Navbar
