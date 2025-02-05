import React from 'react';
import { motion } from 'framer-motion';
import '../components/components.css';

const testimonials = [
  {
    name: "Alex Johnson",
    feedback: "Janetix AI transformed the way we automate content. A game-changer!",
    company: "TechCorp"
  },
  {
    name: "Samantha Lee",
    feedback: "Their AI consulting helped us scale our business effortlessly.",
    company: "InnoVate"
  },
  {
    name: "Daniel Wu",
    feedback: "The AI chatbot alone saved us hours of customer service work!",
    company: "NextGen Solutions"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4>{testimonial.name}</h4>
            <span className="company">{testimonial.company}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;