import './style.css';
import React from 'react';

export default function Experience() {
    return (
        <div className='experience' id='experience'>
            <div className="row">
                <div className="column">
                    <h2>Work Experience</h2>
                    <div className="d-flex media1">
                        <div className="column newcontent">
                            <h3>As Airspace Travels Pvt. Ltd.</h3>
                            <h4><b>From Aug - 2022 to Current</b></h4>
                            <ul>
                                <li>Developed responsive, cross-platform web applications for flight, car, and train bookings using HTML, CSS, and JavaScript.</li>
                                <li>Collaborated effectively with clients to gather requirements and translate them into intuitive, user-centered designs.</li>
                                <li>Optimized web applications for performance and accessibility, ensuring a seamless user experience across devices and browsers.</li>
                            </ul>
                        </div>
                        <div className="column exp1">
                        </div>
                    </div>
                    <div className="d-flex media1">
                        <div className="column exp2">
                        </div>
                        <div className="column newcontent">
                            <h3>Adaan Digital Solutions Pvt. Ltd.</h3>
                            <h4><b>From Feb - 2020 to Jun - 2024</b></h4>
                            <ul>
                                <li>Designed responsive, visually appealing web pages using HTML, CSS, and JavaScript to enhance the user experience across various devices.</li>
                                <li>Collaborated effectively with cross-functional teams to ensure web designs aligned with client requirements & project goals.</li>
                                <li>Optimized website performance by implementing best practices for web standards and improving loading times.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}