import './style.css';
import React from 'react';

export default function Education() {
    return (
        <section>
            <div className="row" id='education'>
                <div className="column">
                    <h2>My Qualification</h2>
                    <div className="d-flex media">
                        <div className="column newcontent">
                            <h3>MBA in Information Technology</h3>
                            <h4><b>From Oct - 2020 to June - 2022</b></h4>
                            <ul>
                                <li>Results-oriented information technology professional with strong business acumen. MBA in Information Technology provides a strategic perspective and leadership skills.</li>
                                <li>Exp. in Business analysis, improvement skills, management skills, etc...</li>
                                <li>Proven ability to manage a team, work in a team, and maintain discipline.</li>
                            </ul>
                        </div>
                        <div className="column manager">
                        </div>
                    </div>
                    <div className="d-flex media">
                    <div className="column coder">
                    </div>
                        <div className="column newcontent">
                            <h3>B.TECH. in Computer Science & Engg.</h3>
                            <h4><b>From July - 2016 to Aug - 2020</b></h4>
                            <ul>
                                <li>Technically proficient computer science graduate with a strong foundation in programming languages, data structures, and algorithms.</li>
                                <li> Experienced in HTML, CSS, JS, React JS, etc...</li>
                                <li>Demonstrated ability to design a user-friendly website with responsiveness for multiple devices.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}