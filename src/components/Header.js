import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="header container">
                <h2 className="header__welcome">Welcome 😃</h2>
                <h1 className="header__title">I'm <strong>Youssef Ahmed</strong>, a full MERN stack developer focused on building complex systems with elegant architectures</h1>
                <a href="mailto:uosefd@gmail.com" className="header__btn" target="_blank">Email Me</a>
            </header>
        )
    }
}

export default Header
