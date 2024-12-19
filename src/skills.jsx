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

export default function Skills() {
    return (
        <div className="skillset">
            <div className="row">
                <div className="d-flex gap1">
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
    );
}