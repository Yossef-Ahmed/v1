import React, { Component } from 'react'
import ExpenseTrackerImage from "../images/projects/Expense Tracker.png";
import WeelzImage from "../images/projects/Weelz.png";

const ExpenseTrackerLink = "https://expense-tracker-qgf0.onrender.com/";
const WeelzLink = "https://github.com/weelz-app/web-app";

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

                    <div className="featured-project">
                        <a href={WeelzLink} className="featured-project__pic" target="_blank">
                            <img src={WeelzImage} alt="Featured Project Image"/>
                        </a>
                        <div className="featured-project__caption">
                            <h3 className="featured-project__name">
                                <a href={WeelzLink}>Weelz</a>
                            </h3>
                            <p className="featured-project__description">A vehicles app for transportation built with the MERN stack to help travelers travel between cities easily.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturedProjects
