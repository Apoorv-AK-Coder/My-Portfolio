import './style.css';
import React from 'react';
import p1 from './asset/project1.png';
import p2 from './asset/project2.png';
import p3 from './asset/project3.png';
import p4 from './asset/project4.png';
import p5 from './asset/project5.png';
import p6 from './asset/project6.png';

export default function WorkData() {
    return (
        <div className="workdata" id='work'>
            <div className="row">
                <div className="column">
                    <h2>My Projects</h2>
                    
                    <div className="main d-flex">
                        <div className="column">
                            <div className="details">
                                <h3>Travel World</h3>
                                <p>Designed an online booking system website utilizing HTML, CSS, ReactJS, and SCSS for a seamless user experience.</p>
                            </div>
                            <a href="https://apoorv-ak-coder.github.io/Travel-World/" target="_blank">
                                <img src={p1} alt="" className="img" />
                            </a>
                        </div>

                        <div className="column">
                            <a href="https://apoorv-ak-coder.github.io/SIMPLE-STITCH-WEAR/" target="_blank">
                                <img src={p2} alt="" className="img1" />
                            </a>
                            <div className="details1">
                                <h3>Simple Stitch Wear</h3>
                                <p>Created an online shopping website using HTML, CSS, and SCSS to enhance user engagement and streamline the shopping experience.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="details">
                                <h3>Netflix Clone</h3>
                                <p>Developed a Netflix clone using HTML, CSS, JavaScript, and SCSS, delivering a responsive and immersive streaming experience.</p>
                            </div>
                            <a href="https://apoorv-ak-coder.github.io/NetFlix-Clone/" target="_blank">
                                <img src={p3} alt="" className="img" />
                            </a>
                        </div>
                    </div>

                    <div className="main d-flex">
                        <div className="column">
                            <div className="details">
                                <h3>Chatboat</h3>
                                <p>Built a chatbot using HTML, CSS, and JavaScript, enabling interactive and dynamic conversations for enhanced user engagement.</p>
                            </div>
                            <a href="https://apoorv-ak-coder.github.io/ChatBot/" target="_blank">
                                <img src={p4} alt="" className="img" />
                            </a>
                        </div>

                        <div className="column">
                            <a href="https://www.figma.com/proto/E7z5V797yUzU5x0m0GzZDY/Garmen?type=design&node-id=86-490&t=l2ejupZBrCAeYIXK-1&scaling=scale-down&page-id=86%3A41" target="_blank">
                                <img src={p5} alt="" className="img1" />
                            </a>
                            <div className="details1">
                                <h3>Garmen</h3>
                                <p>Crafted a visually stunning design in Figma, showcasing a user-centric approach and attention to detail for the desktop.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="details">
                                <h3>Garmen</h3>
                                <p>Crafted a visually stunning design in Figma, showcasing a user-centric approach and attention to detail for the mobile.</p>
                            </div>
                            <a href="https://www.figma.com/proto/E7z5V797yUzU5x0m0GzZDY/Garmen?type=design&node-id=3-5&t=OFYw0ce04hdRZzG0-1&scaling=scale-down&page-id=0%3A1" target="_blank">
                                <img src={p6} alt="" className="img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}