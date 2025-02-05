import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import '@fontsource/poppins';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <motion.nav className={`nav-bar ${scrollPosition > 50 ? 'nav-scrolled' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img 
          src="/logo-no-background.png" 
          alt="Janetix Logo" 
          className="logo" 
        />
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1 
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          AI Innovation, Simplified.
        </motion.h1>
        <motion.p 
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Janetix provides cutting-edge AI solutions tailored for business automation, content generation, and digital transformation.
        </motion.p>
        <motion.button 
          onClick={() => setShowContactForm(true)} 
          className="cta-button"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <motion.h2 className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          About Janetix
        </motion.h2>
        <motion.p className="section-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}>
          At Janetix, we empower businesses with AI-driven solutions, offering innovative automation and custom AI consulting to help enterprises grow and scale efficiently.
        </motion.p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="content-section">
        <motion.h2 className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          Featured Projects
        </motion.h2>
        <div className="portfolio-grid">
          <motion.div className="portfolio-card" whileHover={{ scale: 1.05 }}>
            <h3>AI Chatbots</h3>
            <p>Revolutionizing customer service with intelligent, automated interactions.</p>
          </motion.div>
          <motion.div className="portfolio-card" whileHover={{ scale: 1.05 }}>
            <h3>Data Prediction</h3>
            <p>Advanced machine learning models to optimize decision-making.</p>
          </motion.div>
          <motion.div className="portfolio-card" whileHover={{ scale: 1.05 }}>
            <h3>AI Content Generation</h3>
            <p>Generating high-quality, automated content at scale.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <motion.div className="contact-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <div className="contact-box">
            <h2>Contact Us</h2>
            <p>Let's work together to build something amazing.</p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
            <button onClick={() => setShowContactForm(false)} className="close-button">Close</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
