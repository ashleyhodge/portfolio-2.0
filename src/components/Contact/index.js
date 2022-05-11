import React, { useState } from "react";
import { validateEmail } from '../Contact/utils/helpers.js';

function ContactForm() {
  const [ formState, setFormState ] = useState({ name:'', email:'', message:''});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid)
      // isValid conditional statement
      if(!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        if(!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage('');
        }
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }
  return( 
    <section className="page-section" id="contact-me">
      <div className="container contact">
        <div className="text-center">
        <h2 className="section-heading">Lets Talk!</h2>
        <h3 className="section-subheading text-muted">Send me a message and lets discuss if I'm the right fit for your company!</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input className="form-control" id="name" type="text" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="form-group">
                  <div className="form-group form-group-textarea mb-md-0">
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control" name="email" id="email" type="email" defaultValue={email} onBlur={handleChange}/>
                  </div>
                    {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" defaultValue={message} placeholder="Your Message *" onBlur={handleChange}></textarea>
              </div>
            </div>
          <div className="text-center"><button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default ContactForm;