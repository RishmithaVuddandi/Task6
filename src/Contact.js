import React from 'react';

function Contact() {
  return (
    <section id="Contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, please fill out the form below or email me at vuddandirishmitha@gmail.com.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
