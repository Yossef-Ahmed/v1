import React, { Component } from 'react'

export class OtherProjects extends Component {
    render() {
        return (
            <section className="section other-projects">
                <h2 className="section__title">Other Projects</h2>
                <div className="section__body other-projects__list">
                    <div className="other-project">
                        <h3 className="other-project__name">
                            <a href="#">Surf Videos</a>
                        </h3>
                        <p className="other-project__description">Small React project created during an interview process to browse and search surf videos via the YouTube API.</p>
                        <div className="other-project__tags">
                            <div className="other-project__tag">JavaScript</div>
                            <div className="other-project__tag">React</div>
                            <div className="other-project__tag">React Router</div>
                            <div className="other-project__tag">Axios</div>
                            <div className="other-project__tag">YouTube API</div>
                        </div>
                    </div>
                    <div className="other-project">
                        <h3 className="other-project__name">Surf Videos</h3>
                        <p className="other-project__description">Small React project created during an interview process to browse and search surf videos via the YouTube API.</p>
                        <div className="other-project__tags">
                            <div className="other-project__tag">JavaScript</div>
                            <div className="other-project__tag">React</div>
                            <div className="other-project__tag">React Router</div>
                            <div className="other-project__tag">Axios</div>
                            <div className="other-project__tag">YouTube API</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OtherProjects
