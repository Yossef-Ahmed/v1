import React, { Component } from 'react'

export class MySkills extends Component {
    render() {
        return (
            <section className="section my-skills">
                <h2 className="section__title">Skills</h2>
                <div className="section__body skills-lists">
                    <ul className="skills-list">
                        <li className="skills-list__title">Languages</li>
                        <li className="skills-list__element">JavaScript (ES6)</li>
                        <li className="skills-list__element">CSS/SASS</li>
                        <li className="skills-list__element">HTML</li>
                    </ul>
                    <ul className="skills-list">
                        <li className="skills-list__title">Frameworks</li>
                        <li className="skills-list__element">React JS</li>
                        <li className="skills-list__element">Node.js</li>
                        <li className="skills-list__element">Express</li>
                    </ul>
                    <ul className="skills-list">
                        <li className="skills-list__title">Tools</li>
                        <li className="skills-list__element">NPM &amp; NPM Scripts</li>
                        <li className="skills-list__element">Chrome DevTools</li>
                        <li className="skills-list__element">Git &amp; Github</li>
                        <li className="skills-list__element">Postman</li>
                        <li className="skills-list__element">MongoDB</li>
                        <li className="skills-list__element">Bash</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default MySkills
