import React from 'react';
import '../components/components.css';

const AIFeatures = () => {
  const features = [
    { title: "AI Consulting", description: "Expert AI guidance to streamline business processes." },
    { title: "Machine Learning Models", description: "Custom-trained AI models tailored to your needs." },
    { title: "Automation Tools", description: "AI-powered automation to enhance workflow efficiency." },
    { title: "Chatbot Integration", description: "Seamless AI chatbot solutions for customer engagement." }
  ];

  return (
    <section className="ai-features">
      <h2 className="section-title">Our AI Capabilities</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIFeatures;