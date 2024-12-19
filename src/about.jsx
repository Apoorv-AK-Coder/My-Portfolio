import './style.css';
import React from 'react';
import apoorvPic from './asset/apoorv-pic.png';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='row d-flex gap1'>
                <div className="column content">
                    <h2>About Me</h2>
                    <p>A motivated Frontend Web Developer with Over 4+ years of experience in Creating, Updating & Changing engaging & effective web application designs. Knowledgeable in: HTML, CSS, JS, ReactJS, TailwindCSS, Bootstrap, WordPress, Figma & SCSS with complete focus on Interface designs that are enhanced in the comfort of the user. Has understanding & practice of responsive design principles for flexible devices & appropriate device performance. Energetic individual who is eager to learn more about web technologies & deliver all the creative solutions to their clients. Ambitious individual in search of an opportunity to use & further develop her skill set in a result-oriented & professional team.</p>
                </div>
                <div className="column col">
                    <img src={apoorvPic} />
                </div>
            </div>
        </div>
    );
}