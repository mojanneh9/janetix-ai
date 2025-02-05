import '../components/components.css';
import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us via email or phone.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;