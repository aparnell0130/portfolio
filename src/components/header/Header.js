import React from 'react'
import './index.css'
import pic from './img/profPic.jpg'
export default function Header() {
    return (
        <div>
            <header className="masthead bg-danger text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img className="masthead-avatar mb-2 rounded-circle" src={pic} alt="" />
                    <p className="masthead-subheading font-weight-light mb-3">Code - Create - Commit</p>

                    <h2 id="about" className="page-section-heading text-center text-uppercase text-white m-0">About Me</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-user-tie"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <p>
                        My name is Aaron Parnell. I am from a small town in Oregon, I now reside in Washington state. I was at
                        the DuPont Pier 1 Imports distributing center for 11 years. I started as a part time seasonal and was
                        able to work my way into management there. I spent the last 5-6 years using the Oracle Database
                        Management system to complete daily tasks and increase the speed and quality in which we worked. I am
                        now pursuing a career in web development. I am currently enrolled in a full stack
                        flex coding bootcamp through the University of Washington. My goal is to be employer competitive by the
                        end of this course. I am new to web development, as I evolve so will my portfolio.
            </p>

                </div>
            </header>
        </div>
    )
}
