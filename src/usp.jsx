import './style.css';
import React from 'react';

import { USPdata } from './data.js';

function Data({ image, title, description }) {
    return (
        <div className="newcol column">
            <div className="flex gap">
                <img src={image} alt={title} />
                <h4>{title}</h4>
            </div>
            <hr />
            <p>{description}</p>
        </div>
    );
}

export default function Usp() {
    return (
        <div className='usp'>
            <div className="row grid grid1">
                    {USPdata.map((contentItem) => <Data {...contentItem} />)}
            </div>
        </div>
    );

}