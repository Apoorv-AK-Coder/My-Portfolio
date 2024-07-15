import './style.css';
import skills from './asset/skills.png';
import React from 'react';
import { SkillData } from './data.js';

function Skilldata({ image, title, description }) {
    return (
        <div className='skill'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}

export default function Skills() {

    return (
        <div className="skills" id='skills'>
            <div className="row">
                <div className="column gap d-flex">
                    <img src={skills} />
                    <div><h2>Skills & Technologies</h2>
                        <p>Driving Frontend Development Excellence with Advanced Skills and Technologies.Delivering Engaging Interfaces and High-Performance Web Solutions for the Modern Digital Landscape.</p>
                    </div>
                </div>

                <div className="column skillsec">
                    <><Skilldata {...SkillData[0]} /></>
                    <><Skilldata {...SkillData[1]} /></>
                    <><Skilldata {...SkillData[2]} /></>
                    <><Skilldata {...SkillData[3]} /></>
                </div>
                <div className="column skillsec">
                    <><Skilldata {...SkillData[4]} /></>
                    <><Skilldata {...SkillData[5]} /></>
                    <><Skilldata {...SkillData[6]} /></>
                    <><Skilldata {...SkillData[7]} /></>
                </div>

            </div>
        </div>
    );
}