import './style.css';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <div className='heroBG' id='home'>
            <div className='row d-flex'>
                <div className='column left'>
                    <p className='para'><i className="fa-solid fa-hands-clapping"></i> HELLO I'AM</p>
                    <h1>Apoorv Agarwal</h1>
                    <h2><TypeAnimation
                        cursor={true}
                        sequence={[
                            2000,
                            'Front-End Developer',
                            2000, // Waits 1000ms
                            'UI Developer',
                            2000,
                            'Web Developer',
                            2000,
                        ]}
                        speed={20}
                        repeat={Infinity}
                    /></h2>
                    <p>Passionate about continuous learning and problem-solving, with a knack for identifying & implementing creative approaches to enhance the overall UX.</p>
                    <div className='flex column gap1'>
                        <a href='https://github.com/Apoorv-AK-Coder' target='blank'><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/apoorv-agarwal-38b03a13b/' target='blank'><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="column right">
                    <div id="resume" popover="true">
                        <img src="src/asset/CURRICULUM VITAE.jpg" alt="" />
                    </div>
                    <button popovertarget="resume">Resume</button>

                    <a href="https://wa.me/+917906875025"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    );
}