import './style.css';
import React from 'react';
import img1 from './asset/masters.png';
import img2 from './asset/graduation.png';

export default function Education() {
    return (
        <section>
            <div className="row" id='education'>
                <div className="column">
                    <h2>My Qualification</h2>
                    <div className="innercol grid grid2">
                        <div className="column d-flex gap">
                            <div className="inner">
                                <img src={img1} alt="" />
                                    <h3>MBA in IT</h3>
                                    <h4>From 2020 to 2022</h4>
                            </div>

                            <div className="inner1">
                                <ul>
                                    <li>Results-oriented IT professional with strong business acumen. MBA in IT provides a strategic perspective and leadership skills.</li>
                                    <li>Proven ability to manage a team, work in a team, and maintain discipline.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column d-flex gap">
                            <div className="inner">
                                <img src={img2} alt="" />
                                    <h3>B. Tech. in CSE</h3>
                                    <h4>From 2016 to 2020</h4>
                            </div>

                            <div className="inner1">
                            <ul>
                                <li>Technically proficient CS graduate with a strong foundation in programming languages, data structures, and algorithms.</li>
                                <li> Experienced in HTML, CSS, JS, React JS, etc...</li>
                                <li>Demonstrated ability to design a user-friendly website with responsiveness for multiple devices.</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}