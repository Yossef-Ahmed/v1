import React, { Component } from 'react'
import TestImage from "../images/projects/test.png";

export class FeaturedProjects extends Component {
    render() {
        return (
            <section className="section featured-projects">
                <h2 className="section__title">Featured Projects</h2>
                <div className="section__body featured-projects__list">
                    <div className="featured-project">
                        <a href="#" className="featured-project__pic">
                            <img src={TestImage} alt="Featured Project Image"/>
                        </a>
                        <div className="featured-project__caption">
                            <h3 className="featured-project__name">
                                <a href="#">Expense Tracker</a>
                            </h3>
                            <p className="featured-project__description">Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that prevents blisters from forming.</p>
                        </div>
                    </div>

                    <div className="featured-project">
                        <a href="#" className="featured-project__pic">
                            <img src={TestImage} alt="Featured Project Image"/>
                        </a>
                        <div className="featured-project__caption">
                            <h3 className="featured-project__name">
                                <a href="#">Expense Tracker</a>
                            </h3>
                            <p className="featured-project__description">Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that prevents blisters from forming.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturedProjects
