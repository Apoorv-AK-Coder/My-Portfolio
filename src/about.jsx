import './style.css';
import React from 'react';
import HTML from './asset/HTML.png';
import CSS from './asset/CSS.png';
import Figma from './asset/Figma.png';
import github from './asset/github.png';
import JavaScript from './asset/JavaScript.png';
import reactJS from './asset/React-JS.png';
import TailwindCSS from './asset/TailwindCSS.png';
import sass from './asset/scss.png';
import bootstrap from './asset/bootstrap.png';
import apoorvPic from './asset/apoorv-pic.png';
// import image from './asset/selfi.png';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='row'>
                <div className="maincol">
                    <div className='column col d-flex gap1'>
                        <div className="column">
                            <div className="newhead d-flex gap1">
                                <h2>Hire Me</h2>
                            </div>
                            <div className="content">
                                <h2>About Me</h2>
                                <p>A motivated Frontend Web Developer with Over 4 years of experience in Creating, Updating & Changing engaging & effective web application designs. Knowledgeable in: HTML, CSS, JS, ReactJS, TailwindCSS, Bootstrap, WordPress, Figma & SCSS with complete focus on Interface designs that are enhanced in the comfort of the user. Has understanding & practice of responsive design principles for flexible devices & appropriate device performance. Energetic individual who is eager to learn more about web technologies & deliver all the creative solutions to their clients. Ambitious individual in search of an opportunity to use & further develop her skill set in a result-oriented & professional team.</p>
                            </div>
                        </div>
                        <div className="column">
                            <img src={apoorvPic} />
                        </div>
                    </div>

                    <div className="skillset d-flex gap1">
                        <div className="column flex gap">
                            <h2>4</h2>
                            <p>YEARS OF <br /> EXPERIENCE</p>

                            <h2>2.5k</h2>
                            <p>WEBSITES <br />SUBMITTED</p>
                        </div>
                        <div className="column images">
                            <img src={HTML} alt="" />
                            <img src={CSS} alt="" />
                            <img src={Figma} alt="" />
                            <img src={github} alt="" />
                            <img src={JavaScript} alt="" />
                            <img src={reactJS} alt="" />
                            <img src={TailwindCSS} alt="" />
                            <img src={sass} alt="" />
                            <img src={bootstrap} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}