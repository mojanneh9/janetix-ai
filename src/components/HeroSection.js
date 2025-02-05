import React from 'react';

const HeroSection = ({ mediaType = "video", mediaSrc = "/assets/neon-lines2.mp4" }) => {
  return (
    <section className="hero">
      {/* Conditional Rendering for Media Types */}
      {mediaType === "image" && (
        <img src={mediaSrc} alt="Background" className="hero-media" />
      )}
      {mediaType === "gif" && (
        <img src={mediaSrc} alt="Animated Background" className="hero-media" />
      )}
      {mediaType === "video" && (
        <video autoPlay loop muted playsInline className="hero-media">
          <source src={process.env.PUBLIC_URL + mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay for Better Text Visibility */}
      <div className="hero-overlay"></div>

      {/* Hero Text */}
      <div className="hero-content">
        <h1>Welcome to Janetix AI</h1>
        <p>Leading the future of AI-powered web solutions</p>
      </div>
    </section>
  );
};

export default HeroSection;