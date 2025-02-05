import React from 'react';

const HeroSection = ({ mediaType = "video", mediaSrc = "/assets/neon-lines2.mov" }) => {
  return (
    <section className="hero">
      {mediaType === "video" && (
        <video autoPlay loop muted playsInline className="hero-media">
          <source src={process.env.PUBLIC_URL + mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="hero-overlay"></div>
      <h1>Welcome to Janetix AI</h1>
      <p>Leading the future of AI-powered web solutions</p>
    </section>
  );
};

export default HeroSection;