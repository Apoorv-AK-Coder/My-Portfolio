import './style.css';
import React from 'react';
import img1 from './asset/developer.png';
import img2 from './asset/designer.png';

export default function Experience() {
    return (
        <div className='experience' id='experience'>
            <div className="row">
                <div className="column">
                    <h2>Work Experience</h2>
                    <div className="innercol grid grid2">
                        <div className="column d-flex gap">
                            <div className="inner">
                                <img src={img1} alt="" />
                                <h3>As Airspace Travels Pvt. Ltd.</h3>
                                <h4>From Aug-2024 to Current</h4>
                            </div>

                            <div className="inner1">
                                <ul>
                                    <li>Developed responsive, cross-platform web applications for flight, car, and train bookings using HTML, CSS, and JS.</li>
                                    <li>Collaborated effectively with clients to gather requirements and translate them into intuitive, user-centered designs.</li>
                                    <li>Optimized web applications for performance and accessibility, ensuring a seamless user experience across devices and browsers.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column d-flex gap">
                            <div className="inner">
                                <img src={img2} alt="" />
                                <h3>Adaan Digital Solution Pvt. Ltd.</h3>
                                <h4>From Feb-2020 to Jun-2024</h4>
                            </div>

                            <div className="inner1">
                                <ul>
                                    <li>Designed responsive, visually appealing web pages using HTML, CSS, & JS to enhance the UX across various devices.</li>
                                    <li>Collaborated effectively with cross-functional teams to ensure web designs aligned with client requirements & project goals.</li>
                                    <li>Optimized website performance by implementing best practices for web standards and improving loading times.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}