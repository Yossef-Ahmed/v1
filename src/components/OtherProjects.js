import React, { Component } from 'react'

export class OtherProjects extends Component {
    render() {
        return (
            <section className="section other-projects">
                <h2 className="section__title">Other Projects</h2>
                <div className="section__body other-projects__list">
                    <div className="other-project">
                        <h3 className="other-project__name">
                            <a href="https://yossef-ahmed.github.io/words-spinner/" target="_blank">Words Spinner</a>
                        </h3>
                        <p className="other-project__description">A sample React JS app that reverses any word you type that has 5 or more letters.</p>
                        <div className="other-project__tags">
                            <div className="other-project__tag">JavaScript</div>
                            <div className="other-project__tag">React JS</div>
                            <div className="other-project__tag">SCSS</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OtherProjects
