import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Embedded Video from Google Drive */}
      <video autoPlay loop muted playsInline className="hero-media">
        <source 
          src="https://drive.google.com/uc?export=download&id=1PWv4U2iqTN-u4ugnHPjznbWod5i765WJ" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
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