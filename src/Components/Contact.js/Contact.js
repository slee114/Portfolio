import React from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';


const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7qdh0lo', 'template_vuem998', e.target, 'm9pbq8xtKGhoFHcIV')
    .then((result) => {
          console.log(result.text);
    }, (error) => {
          console.log(error.text);
    });
    e.target.reset();
};

const ContactForm = () => {
    return(
        <div className="ContactMe ModifiedSection">
            <form onSubmit={sendEmail}>
                <div className="FormContainer">
                    <div className="Title"><h3>&lt;Contact Me!/&gt;</h3></div>
                    <div className='inputs'>
                        <input type='text' className="form-control" placeholder="Name" name="name"></input>
                    </div>
                    <div className='inputs'>
                        <input type='email' className="form-control" placeholder="Email Address" name="email"></input>
                    </div>
                    <div className='inputs'>
                    <input type='text' className="form-control" placeholder="Subject" name="subject"></input>
                    </div>
                    <div className='inputs message'>
                        <textarea className="form-control" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                    </div>
                    <div className='inputs'>
                        <input type='submit' className="submitButton" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;