import './style.css';
import contact from './asset/contact.png';
import email from './asset/email.png';
import location from './asset/location.png';
import whatsapp from './asset/whatsapp.png';
import React from 'react';

export default function Contact() {
    return (
        <div className='contact'>
            <div className="row">
                <div className="column">
                    <h2>Contact Information</h2>
                </div>
                <div className="column d-flex">
                    <div className="column">
                        <h3>Conatct Me</h3>
                    </div>
                    <div className="column">
                        <h3>Conatct Information</h3>
                        <div className='details'>
                            <div>
                                <img src={location} />
                                <h4>Current Location</h4>
                                <p>Laxmi Nagar, New Delhi</p>
                            </div>
                            <div>
                                <img src={contact} />
                                <h4>Phone Number</h4>
                                <p><a href='tel:+917906875025'>+91-7906875025</a></p>
                            </div>
                        </div>
                        <div>
                            <img src={email} />
                            <h4>E-mail Id</h4>
                            <p><a href='mailto:contact.apoorv.agarwal@gmail.com'>contact.apoorv.agarwal@gmail.com</a></p>
                        </div>
                        <img src={whatsapp} />
                    </div>
                </div>
            </div>
        </div>
    );
}