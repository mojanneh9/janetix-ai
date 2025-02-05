import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Embedded Video from Dropbox */}
      <video autoPlay loop muted playsInline className="hero-media">
        <source src="https://www.dropbox.com/scl/fi/whkdu2236nf8o35c25isy/neon-lines2.mp4?rlkey=12zki4m0gwcf41vgil05dj49y&st=jts9tk69&raw=1" type="video/mp4" />
        Your browser does not support the video tag or the video failed to load.
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