import React, { Component } from 'react'
import EmailLogo from "../images/Footer Logos/email.svg";
import GitHubLogo from "../images/Footer Logos/github.svg";
import LinkedInLogo from "../images/Footer Logos/linkedin.svg";
import UpworkLogo from "../images/Footer Logos/upwork.png";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer container">
                <div className="footer__copyright">Designed &amp; Developed by Youssef Ahmed 2021</div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="#" target="_blank">
                            <span className="footer__link__text">LinkedIn</span>
                            <img className="footer__link__logo" src={LinkedInLogo} alt="LinkedIn Logo"/>
                        </a>
                    </li>
                    <li className="footer__link">
                        <a href="https://github.com/Yossef-Ahmed" target="_blank">
                            <span className="footer__link__text">GitHub</span>
                            <img className="footer__link__logo" src={GitHubLogo} alt="GitHub Logo"/>
                        </a>
                    </li>
                    <li className="footer__link">
                        <a href="https://www.upwork.com/freelancers/~01308eb52705e89d58" target="_blank">
                            <span className="footer__link__text">Upwork</span>
                            <img className="footer__link__logo" src={UpworkLogo} alt="Upwork Logo"/>
                        </a>
                    </li>
                    <li className="footer__link" target="_blank">
                        <a href="mailto:uosefd@gmail.com">
                            <span className="footer__link__text">Email</span>
                            <img className="footer__link__logo" src={EmailLogo} alt="Email Logo"/>
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer
