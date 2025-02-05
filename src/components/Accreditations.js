import React from 'react';

const Accreditations = () => {
  return (
    <section className="accreditations">
      <h2>Our Certifications</h2>
      <div className="cert-container">
        <img src={process.env.PUBLIC_URL + "/assets/cert1.png"} alt="Certification 1" />
        <img src={process.env.PUBLIC_URL + "/assets/cert2.png"} alt="Certification 2" />
        <img src={process.env.PUBLIC_URL + "/assets/cert3.png"} alt="Certification 3" />
      </div>
    </section>
  );
};

export default Accreditations;