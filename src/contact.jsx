import './style.css';
import contact from './asset/contact.png';
import email from './asset/email.png';
import location from './asset/location.png';
import React from 'react';
import Form from './form.jsx';

export default function Contact() {

    return (
        <div className='contact' id='contact'>
            <div className="row">
                <div className="column d-flex">
                    <div className="column form">
                        <h2>Conatct Me</h2>
                        <Form />
                    </div>
                    <div className="column info">
                        <h3>Conatct Details</h3>
                        <div className="infodetails">
                            <div className="flex gap inner">
                                <img src={location} />
                                <div>
                                    <h4>Current Location</h4>
                                    <p>Laxmi Nagar, New Delhi</p>
                                </div>
                            </div>
                            <div className="flex gap inner">
                                <img src={contact} />
                                <div>
                                    <h4>Phone Number</h4>
                                    <p><a href='tel:+917906875025'>+91-7906875025</a></p>
                                </div>
                            </div>
                            <div className="flex gap inner">
                                <img src={email} />
                                <div>
                                    <h4>E-mail Id</h4>
                                    <p><a href='mailto:contact.apoorv.agarwal@gmail.com'>contact.apoorv.agarwal@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}