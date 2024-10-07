import './style.css';
import React from 'react';
// import emailjs from 'emailjs-com';

export default function Form() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "743c6fb2-2a39-4136-88ad-86e4c1ad331f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>Fields marked with an * are required.</p>
                <div className="d-flex gap1">
                    <label htmlFor="fullname">
                        Full Name*
                        <input type='text' placeholder='Your Full Name' name='name' required id="fullname" />
                    </label>
                    <label htmlFor="phone">
                        Phone No.*
                        <input type='tel' placeholder='Phone Number' name='phone' required id="phone" />
                    </label>
                </div>
                <label htmlFor="email">
                    E-mail*
                    <input type='email' placeholder='E-mail Id ex(example@example.com)' name='email' required id="email" />
                </label>
                <label htmlFor="message">
                    Message*
                    <textarea placeholder='Your Message Here...' name='message' required id="message" />
                </label>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    );

}