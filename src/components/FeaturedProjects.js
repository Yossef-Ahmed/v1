import React, { Component } from 'react'
import ExpenseTrackerImage from "../images/projects/Expense Tracker.png";
const ExpenseTrackerLink = "https://track-my-money.herokuapp.com/";

export class FeaturedProjects extends Component {
    render() {
        return (
            <section className="section featured-projects">
                <h2 className="section__title">Featured Projects</h2>
                <div className="section__body featured-projects__list">
                    <div className="featured-project">
                        <a href={ExpenseTrackerLink} className="featured-project__pic" target="_blank">
                            <img src={ExpenseTrackerImage} alt="Featured Project Image"/>
                        </a>
                        <div className="featured-project__caption">
                            <h3 className="featured-project__name">
                                <a href={ExpenseTrackerLink}>Expense Tracker</a>
                            </h3>
                            <p className="featured-project__description">A finance management tool build with the MERN stack to help you record your daily transactions easily, discover your spending habits, and in general, Discover where your money goes.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturedProjects
