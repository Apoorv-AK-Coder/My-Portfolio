import './style.css';
import React from 'react';

export default function Experience() {
    return (
        <div className='experience' id='experience'>
            <div className="row">
                <div className="column">
                    <h2>Work Experience</h2>
                    <div className='worksection'>
                        <div className="flex">
                            <i className="fa-solid fa-right-long"></i>
                            <div>
                                <h3>Adaan Digital Solution Private Limited</h3>
                                <h3>Web Developer</h3>
                                <h4>Feb-2020 to June-2024</h4>
                                <ul>
                                    <li><p>I have more than 4 Years of experience in Web Design which I have upgraded to Front-End Web Developer & where I have been active for the past 2 Months. My speciality is developing easy-to-use & graphical UI beside a base course in HTML & CSS with JavaScript to make website that are responsive & functional.</p></li>
                                    <li><p>Collaborated closely with clients to understand their branding, objectives, & user experience goals, resulting in a highly client satisfaction rate.</p></li>
                                    <li><p>Utilized industry-standard design using the basic skills like HTML & CSS with JS & React js.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='worksection'>
                        <div className="flex">
                            <i className="fa-solid fa-right-long"></i>
                            <div>
                                <h3>As Airspace Travels Private Limited</h3>
                                <h3>Frontend Web Developer</h3>
                                <h4>Aug-2020 to Current</h4>
                                <ul>
                                    <li><p><b>Project Development: </b>Collaborate on various web applications, contributing to the design & implementation of user-friendly UI.</p></li>
                                    <li><p><b>Technologies Used: </b>Utilize HTML, CSS, and JavaScript, to build responsive and interactive features.</p></li>
                                    <li><p><b>Code Quality: </b>Follow best practices in coding standards and perform code reviews to ensure maintainability and efficiency.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}