import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="header container">
                <h2 className="header__welcome">Welcome 😃</h2>
                <h1 className="header__title">I'm <strong>Youssef Ahmed</strong>, a full MERN stack developer focused on building complex systems with elegant architectures</h1>
                <button className="header__btn">Contact Me</button>
            </header>
        )
    }
}

export default Header
